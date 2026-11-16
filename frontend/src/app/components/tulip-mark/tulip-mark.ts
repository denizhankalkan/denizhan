import { Component } from '@angular/core';

/**
 * The small tulip beside the name, drawn after the tulips on Iznik tiles:
 * two cobalt petals, a red one between them, turquoise leaves.
 * Its size comes from the font size of wherever it is placed; colours come from styles.scss.
 */
@Component({
  selector: 'app-tulip-mark',
  template: `
    <svg viewBox="0 0 40 56" aria-hidden="true" focusable="false">
      <path class="stem" d="M20 31 C20 38 19 46 20 54" />
      <path class="leaf" d="M19.8 50 C13 48 9 42 8 35 C13 37 18 42 19.8 50 Z" />
      <path class="leaf" d="M20.2 46 C26 44 30 39 31 33 C26.5 35 22 39 20.2 46 Z" />
      <path class="heart" d="M20 30 C16.5 24 16.5 14 20 5 C23.5 14 23.5 24 20 30 Z" />
      <path
        class="petal"
        d="M20 31 C12 31 8 25 9.5 18 C10.5 13 9 8 6.5 3 C12 7 15.5 12 16.5 18 C17 22 18.5 27 20 31 Z"
      />
      <path
        class="petal"
        d="M20 31 C28 31 32 25 30.5 18 C29.5 13 31 8 33.5 3 C28 7 24.5 12 23.5 18 C23 22 21.5 27 20 31 Z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: inline-block;
      width: 1.2em;
      height: 1.68em;
      flex: none;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .petal {
      fill: var(--cobalt);
    }

    .heart {
      fill: var(--madder);
    }

    .leaf {
      fill: var(--turquoise);
    }

    .stem {
      fill: none;
      stroke: var(--turquoise);
      stroke-width: 1.6;
      stroke-linecap: round;
    }
  `,
})
export class TulipMark {}
