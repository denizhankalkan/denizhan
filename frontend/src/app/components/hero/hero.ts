import { Component } from '@angular/core';
import { SITE } from '../../content/site.content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = SITE;
}
