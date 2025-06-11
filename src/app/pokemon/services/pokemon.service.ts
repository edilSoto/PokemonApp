import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonApiResponse } from '../interfaces/pokemon-Api-Response.interface';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonMapper } from '../mappers/pokemon.mapper';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  getPokemon(pokemon: string|number): Observable<Pokemon>{

    return this.http.get<PokemonApiResponse>(`${API_URL}/pokemon/${pokemon}`)
      .pipe(
        map(response => PokemonMapper.pokemonApiResponseToPokemon(response)),
        tap((pokemon) => console.log(pokemon)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(`No pokemon named: ${pokemon}`))
        }))
  }
}
