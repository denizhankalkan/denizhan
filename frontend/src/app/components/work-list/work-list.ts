import { Component, computed, input } from '@angular/core';
import { Section } from '../../content/site.model';

/** One titled list of entries. Used for every section in site.content.ts. */
@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.html',
  styleUrl: './work-list.scss',
})
export class WorkList {
  readonly section = input.required<Section>();

  /** Rows without a title are placeholders waiting for content. */
  protected readonly entries = computed(() =>
    this.section().entries.filter((entry) => entry.title.trim().length > 0),
  );
}
