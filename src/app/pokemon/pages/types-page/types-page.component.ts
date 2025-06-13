import { Component, inject, OnInit, signal } from '@angular/core';
import { TypeCardComponent } from "../../components/type-card/type-card.component";
import { PokemonService } from '../../services/pokemon.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { TypesGridComponent } from "../../components/types-grid/types-grid.component";

@Component({
  selector: 'app-types-page',
  imports: [TypesGridComponent],
  templateUrl: './types-page.component.html',
})
export class TypesPageComponent implements OnInit {
  pokemonServices = inject(PokemonService);
  
  types = signal<string[] | null>(null);
  
  ngOnInit(): void {
    this.types.set([]);
  }

  pokemonResource = rxResource({
    request: () => ({ types: this.types()}),
    loader: () => {
      return this.pokemonServices.getTypes();
    }
  })
}
