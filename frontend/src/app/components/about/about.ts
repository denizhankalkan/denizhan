import { Component } from '@angular/core';
import { SITE } from '../../content/site.content';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = SITE.about;
}
