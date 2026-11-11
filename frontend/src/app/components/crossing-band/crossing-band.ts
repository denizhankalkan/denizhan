import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { SITE } from '../../content/site.content';
import { CrossingColours, drawCrossing } from '../../helpers/crossing-renderer';

/** How far the meeting point may travel towards either edge. */
const MIN_MEETING_POINT = 0.28;
const MAX_MEETING_POINT = 0.72;

/**
 * The band under the hero. Moving a finger or the mouse across it moves the
 * point where the grid turns into stars. The drawing is in helpers/crossing-renderer.ts.
 */
@Component({
  selector: 'app-crossing-band',
  templateUrl: './crossing-band.html',
  styleUrl: './crossing-band.scss',
})
export class CrossingBand {
  protected readonly site = SITE;

  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly destroyRef = inject(DestroyRef);

  private meetingPoint = 0.5;
  private target = 0.5;
  private frame = 0;

  constructor() {
    afterNextRender(() => this.start());
  }

  private start(): void {
    const canvas = this.canvasRef().nativeElement;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () =>
      drawCrossing(canvas, { meetingPoint: this.meetingPoint, colours: this.readColours() });

    const glide = () => {
      this.meetingPoint += (this.target - this.meetingPoint) * 0.12;
      if (Math.abs(this.target - this.meetingPoint) < 0.002) {
        this.meetingPoint = this.target;
        this.frame = 0;
        render();
        return;
      }
      render();
      this.frame = requestAnimationFrame(glide);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const position = (event.clientX - bounds.left) / bounds.width;
      this.target = Math.max(MIN_MEETING_POINT, Math.min(MAX_MEETING_POINT, position));
      if (calm) {
        this.meetingPoint = this.target;
        render();
      } else if (!this.frame) {
        this.frame = requestAnimationFrame(glide);
      }
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerdown', onPointerMove);
    window.addEventListener('resize', render);
    document.fonts?.ready.then(render);
    render();

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(this.frame);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerdown', onPointerMove);
      window.removeEventListener('resize', render);
    });
  }

  /** The canvas takes its colours from the tokens in styles.scss. */
  private readColours(): CrossingColours {
    const tokens = getComputedStyle(document.documentElement);
    return {
      west: tokens.getPropertyValue('--ink').trim(),
      east: tokens.getPropertyValue('--cobalt').trim(),
      dot: tokens.getPropertyValue('--madder').trim(),
    };
  }
}
