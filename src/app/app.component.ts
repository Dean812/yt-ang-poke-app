import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'; // list
import { Pokemon } from './pokemon'; // class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;  // import from mock-pokemon-list  

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon: Pokemon) {  // l'import de la class pokemon permet d'utiliser le typage ici
    console.log(`vous avez cloqué sur le pokémon ${pokemon.name}`);
  }  // de ce fait, on peut utiliser les propriétés de la class pokémon

}
