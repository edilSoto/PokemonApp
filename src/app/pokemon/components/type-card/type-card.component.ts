import { Component, input } from '@angular/core';

@Component({
  selector: 'pokemon-type-card',
  imports: [],
  templateUrl: './type-card.component.html',
})
export class TypeCardComponent {
  type = input.required<string>();
}
