import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS; // récupération de la liste pokémon dans le mock
  pokemonSelected: Pokemon | undefined; // attribut de type Pokemon

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(getPokemon => getPokemon.id == +pokemonId);

    if (pokemon) {   // si Pokemon
      console.log(`vous avez cloqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {    // si undifined
      console.log(`vous avez cloqué sur un pokémon qui n'existe pas`);

    }

  }
}
