import { Component, input, signal } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { ConvertHgtoKgPipe } from "../../pipes/convert-hg-to-kg.pipe";
import { ConvertDmtoMPipe } from "../../pipes/convert-dm-to-m.pipe";
import { CapitalizeFirstLetterPipe } from "../../pipes/capitalize-first-letter.pipe";
import { PokemonImageComponent } from "./pokemon-image/pokemon-image.component";

@Component({
  selector: 'pokemon-card',
  imports: [ConvertHgtoKgPipe, ConvertDmtoMPipe, CapitalizeFirstLetterPipe, PokemonImageComponent],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();

  shiny = signal<boolean>(false);

  setShinyStatus(status: boolean){
    this.shiny.set(status);
  }
}
