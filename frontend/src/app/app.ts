import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { CrossingBand } from './components/crossing-band/crossing-band';
import { Hero } from './components/hero/hero';
import { Path } from './components/path/path';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { WorkList } from './components/work-list/work-list';
import { SITE } from './content/site.content';

/** The whole page, top to bottom. Reorder the parts in app.html. */
@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, CrossingBand, About, WorkList, Path, Contact, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly sections = SITE.sections;
}
