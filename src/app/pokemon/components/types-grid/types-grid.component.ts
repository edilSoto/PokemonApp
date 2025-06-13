import { Component, computed, input } from '@angular/core';
import { TypeCardComponent } from "../type-card/type-card.component";

@Component({
  selector: 'pokemon-types-grid',
  imports: [TypeCardComponent],
  templateUrl: './types-grid.component.html',
})
export class TypesGridComponent {
  typesInput = input.required<string[]>()

  types = computed(() => this.typesInput().slice(0, 18))
}
