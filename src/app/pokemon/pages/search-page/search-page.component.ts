import { Component, inject, signal } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { PokemonService } from '../../services/pokemon.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-search-page',
  imports: [SearchComponent, PokemonCardComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  pokemonService = inject(PokemonService);

  query = signal<string>('');

  pokemonResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {
      const query = request.query.toLowerCase();

      if(!query) return of()

      return this.pokemonService.getPokemon(query);
    }
  })

  setQuery(value: string){
    this.query.set(value);
  }
}
