import { Component } from '@angular/core';
import { SITE } from '../../content/site.content';

@Component({
  selector: 'app-path',
  templateUrl: './path.html',
  styleUrl: './path.scss',
})
export class Path {
  protected readonly entries = SITE.path;
}
