import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  
  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(getPokemon => getPokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez cliqué sur un pokémon qui n'existe pas`);

    }

  }


}
