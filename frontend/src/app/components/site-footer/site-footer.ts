import { Component } from '@angular/core';
import { SITE } from '../../content/site.content';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer class="wrap">
      <div class="name">
        <i aria-hidden="true"></i>{{ site.name.first }} {{ site.name.last }}
      </div>

      <nav aria-label="Footer">
        @for (link of site.nav; track link.target) {
          <a [href]="'#' + link.target">{{ link.label }}</a>
        }
      </nav>

      <div class="colophon label">
        <span>{{ site.footer.left }}</span>
        <span>
          {{ site.footer.right }}
          @if (site.footer.sourceUrl) {
            · <a [href]="site.footer.sourceUrl" target="_blank" rel="noopener">View source</a>
          }
        </span>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--line);
      background: var(--cream-deep);
    }

    footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 20px 32px;
      align-items: center;
      padding-block: 36px 28px;
    }

    .name {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    .name i {
      display: block;
      width: 7px;
      height: 7px;
      background: var(--madder);
      transform: rotate(45deg);
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 22px;
    }

    nav a {
      font-size: 15px;
      text-decoration: none;
    }

    nav a:hover,
    .colophon a:hover {
      color: var(--cobalt);
    }

    .colophon {
      grid-column: 1 / -1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6px 24px;
      padding-top: 18px;
      border-top: 1px solid var(--line);
    }

    @media (max-width: 640px) {
      footer {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class SiteFooter {
  protected readonly site = SITE;
}
