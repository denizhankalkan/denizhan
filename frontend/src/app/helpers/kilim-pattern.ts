/**
 * The carpet border at the top and bottom of the page.
 *
 * The motif is drawn as a small character map, one character per knot.
 * Edit the map to redraw the border; every row must have the same length.
 * The tile repeats sideways, so the left and right edges meet each other.
 */
const KNOTS: Record<string, string> = {
  '.': '#8E2B22', // madder red ground
  i: '#17234F', // indigo
  c: '#F4EDDF', // cream
  g: '#C2983F', // gold
  t: '#2A827C', // turquoise
};

const TILE = [
  'iiiiiiii',
  '........',
  '...cc...',
  '..cggc..',
  '.cgttgc.',
  '..cggc..',
  '...cc...',
  '........',
  'iiiiiiii',
];

export const KILIM_COLUMNS = TILE[0].length;
export const KILIM_ROWS = TILE.length;

/** Builds the tile as an SVG, merging neighbouring knots of one colour into a single rect. */
export function kilimTileSvg(): string {
  const rects: string[] = [];
  TILE.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const knot = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === knot) run++;
      rects.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${KNOTS[knot]}"/>`);
      x += run;
    }
  });
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${KILIM_COLUMNS} ${KILIM_ROWS}" ` +
    `shape-rendering="crispEdges">${rects.join('')}</svg>`
  );
}

/** The tile as a CSS background-image value. */
export function kilimTileUrl(): string {
  return `url("data:image/svg+xml,${encodeURIComponent(kilimTileSvg())}")`;
}
