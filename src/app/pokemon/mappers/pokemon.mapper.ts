import { PokemonApiResponse } from "../interfaces/pokemon-Api-Response.interface";
import { Pokemon } from "../interfaces/pokemon.interface";

export class PokemonMapper {

    static pokemonApiResponseToPokemon(response: PokemonApiResponse) : Pokemon {
        return {
            name: response.name,
            height: response.height,
            weight: response.weight,
            sprite: {
                front: response.sprites.front_default,
                back: response.sprites.back_default,
                shinyFront: response.sprites.front_shiny,
                shinyBack: response.sprites.back_shiny
            },
            types: response.types.map(type => type.type.name),
            stats: response.stats.map((stat) => { 
                return {value: stat.base_stat, name: stat.stat.name }
            }),
            

        }
    }
}