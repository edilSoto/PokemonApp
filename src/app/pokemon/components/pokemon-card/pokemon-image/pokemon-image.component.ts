import { Component, input } from '@angular/core';
import { Sprite } from '../../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-image',
  imports: [],
  templateUrl: './pokemon-image.component.html',
})
export class PokemonImageComponent {
  shiny = input.required<boolean>();
  sprite = input.required<Sprite>();
}
