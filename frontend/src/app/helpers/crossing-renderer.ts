/**
 * Draws the band under the hero: a plain square grid in the West that turns,
 * cell by cell, into eight-pointed stars in the East.
 *
 * Each cell holds two squares. In the West they lie on top of each other and
 * fill the cell, which reads as a grid. Moving East the second square rotates
 * towards 45 degrees and both shrink until their points touch: a star.
 */
export interface CrossingColours {
  west: string;
  east: string;
  dot: string;
}

export interface CrossingOptions {
  /** Where West meets East, from 0 (left edge) to 1 (right edge). */
  meetingPoint: number;
  colours: CrossingColours;
}

/** Width of the zone in which the grid becomes stars, as a share of the band. */
const TRANSITION = 0.48;
/** A star whose points touch its neighbours is this much smaller than its cell. */
const STAR_SHRINK = 1 - Math.SQRT1_2;

function strokeSquare(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  side: number,
  angle: number,
): void {
  const half = side / 2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const corners = [
    [-half, -half],
    [half, -half],
    [half, half],
    [-half, half],
  ];
  ctx.beginPath();
  corners.forEach(([x, y], index) => {
    const px = cx + x * cos - y * sin;
    const py = cy + x * sin + y * cos;
    if (index === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.closePath();
  ctx.stroke();
}

export function drawCrossing(canvas: HTMLCanvasElement, options: CrossingOptions): void {
  const ctx = canvas.getContext('2d');
  const bounds = canvas.getBoundingClientRect();
  const width = bounds.width;
  const height = bounds.height;
  if (!ctx || !width || !height) return;

  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 1;

  const cell = width < 600 ? 34 : 52;
  const columns = Math.ceil(width / cell) + 1;
  const rows = Math.ceil(height / cell) + 1;
  const offsetX = (width - columns * cell) / 2;
  const offsetY = (height - rows * cell) / 2;
  const { west, east, dot } = options.colours;

  for (let column = 0; column < columns; column++) {
    const cx = offsetX + (column + 0.5) * cell;
    const linear = (cx / width - (options.meetingPoint - TRANSITION / 2)) / TRANSITION;
    const clamped = Math.max(0, Math.min(1, linear));
    const east01 = clamped * clamped * (3 - 2 * clamped); // smoothstep
    const side = cell * (1 - STAR_SHRINK * east01);

    for (let row = 0; row < rows; row++) {
      const cy = offsetY + (row + 0.5) * cell;

      if (east01 < 1) {
        ctx.globalAlpha = (1 - east01) * 0.3;
        ctx.strokeStyle = west;
        strokeSquare(ctx, cx, cy, side, 0);
      }
      if (east01 > 0) {
        ctx.globalAlpha = east01 * 0.8;
        ctx.strokeStyle = east;
        strokeSquare(ctx, cx, cy, side, 0);
        strokeSquare(ctx, cx, cy, side, (east01 * Math.PI) / 4);

        if (east01 > 0.97 && (column + row) % 2 === 0) {
          ctx.globalAlpha = 1;
          ctx.fillStyle = dot;
          ctx.beginPath();
          ctx.arc(cx, cy, 1.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
  ctx.globalAlpha = 1;
}
