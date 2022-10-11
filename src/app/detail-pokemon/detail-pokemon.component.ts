import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
