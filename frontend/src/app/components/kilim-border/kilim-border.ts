import { Component } from '@angular/core';
import { kilimTileUrl } from '../../helpers/kilim-pattern';

/** The carpet border. The motif itself is drawn in helpers/kilim-pattern.ts. */
@Component({
  selector: 'app-kilim-border',
  template: `<div class="kilim" [style.background-image]="tile" aria-hidden="true"></div>`,
  styles: `
    :host {
      display: block;
    }

    /* 9 knots tall: 3px per knot on wide screens, 2px on phones. */
    .kilim {
      height: 27px;
      background-repeat: repeat-x;
      background-position: center;
      background-size: auto 100%;
    }

    @media (max-width: 640px) {
      .kilim {
        height: 18px;
      }
    }
  `,
})
export class KilimBorder {
  protected readonly tile = kilimTileUrl();
}
