import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) { }

  goToPokemonList(pokemon: Pokemon) {
    //Utilisation du routage via un ID > donc  constructeur w/ router et ▼ "navigate"
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}
