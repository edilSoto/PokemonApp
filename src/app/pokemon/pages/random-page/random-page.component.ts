import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonService } from '../../services/pokemon.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-random-page',
  imports: [],
  templateUrl: './random-page.component.html',
})
export class RandomPageComponent implements OnInit{
  pokemonService = inject(PokemonService)
  
  pokemonId = signal<number | null>(null)
  
  ngOnInit(): void {
    this.pokemonId.set(Math.floor(Math.random() * 151) + 1); 
  }

    pokemonResource = rxResource({
    request: () => ({query: this.pokemonId()}),
    loader: ({request}) => {
      if(!request.query) return of({})

      return this.pokemonService.getPokemon(request.query) 
    }
  })
}
