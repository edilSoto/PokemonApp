import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonApiResponse } from '../interfaces/pokemon-Api-Response.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonMapper } from '../mappers/pokemon.mapper';
import { PokemonTypeAPIResponse } from '../interfaces/pokemon-types-api-response.interface';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);
  
  private pokemonTypesCache = new Set<string[]>()

  getPokemon(pokemon: string | number): Observable<Pokemon> {

    return this.http.get<PokemonApiResponse>(`${API_URL}/pokemon/${pokemon}`)
      .pipe(
        map(response => PokemonMapper.pokemonApiResponseToPokemon(response)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(`No pokemon named: ${pokemon}`))
        }))
  }

  getTypes(): Observable<string[]> {
    if(this.pokemonTypesCache.size > 0) return of(this.pokemonTypesCache.values().next().value!)

    return this.http.get<PokemonTypeAPIResponse>(`${API_URL}/type`)
      .pipe(
        map(response => response.results.map((type) => type.name)),
        tap(types => this.pokemonTypesCache.add(types)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error('Error fetching types'))
        }))
  }
}
