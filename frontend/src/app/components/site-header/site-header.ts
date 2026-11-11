import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { SITE } from '../../content/site.content';
import { timeIn } from '../../helpers/clock';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly times = signal(this.readClocks());

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const timer = setInterval(() => this.times.set(this.readClocks()), 20_000);
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  private readClocks(): string[] {
    return SITE.clocks.map((clock) => timeIn(clock.timeZone));
  }
}
