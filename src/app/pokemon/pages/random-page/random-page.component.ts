import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonService } from '../../services/pokemon.service';
import { of } from 'rxjs';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-random-page',
  imports: [PokemonCardComponent],
  templateUrl: './random-page.component.html',
})
export class RandomPageComponent implements OnInit{
  pokemonService = inject(PokemonService)
  
  pokemonId = signal<number | null>(null)
  
  ngOnInit(): void {
    this.pokemonId.set(this.generateRandomNumber()); 
  }

    pokemonResource = rxResource({
    request: () => ({query: this.pokemonId()}),
    loader: ({request}) => {
      if(!request.query) return of(null)

      return this.pokemonService.getPokemon(request.query) 
    }
  })

  generateRandomNumber(): number{
    return Math.floor(Math.random() * 151) + 1
  }

  getNewPokemon(){
    this.pokemonId.set(this.generateRandomNumber()); 
  }
}
