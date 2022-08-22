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

  selectPokemon(pokemonId: string) { // input.value retourne un    String, malgré le input number
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemonOuAutre => pokemonOuAutre.id == +pokemonId);
    // plutot que de faire des index +1 pour égalisé les chiffres, on recherche une égalité        ▲ 
    // pokemonouautre c'ets pour dire qu'on peut mettre ce que l'on veut comme nom
    // si on ne place pas le pokemon/undifined, la valeur pokemonSelected ne prend pas, il faut ajouter a ca 
    // la condition if / else sont obligatoire pour gérer le undifined
    // function (pekomonOuAutre) { pokemonOuAutre.id == +pokemonId }

    if (pokemon) {   // si Pokemon
      console.log(`vous avez cloqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon; 
    } else {    // si undifined
      console.log(`vous avez cloqué sur un pokémon qui n'existe pas`);
      //this.pokemonSelected = pokemon;       <-- pas nécessaire
    }

  }
}
