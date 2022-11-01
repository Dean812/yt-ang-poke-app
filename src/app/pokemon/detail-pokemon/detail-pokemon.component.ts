import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {

    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      //this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);  <<  anciennement
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId); // rappel , le + c'est pour passer en number 
    }

  }

  goToParameterList() {
    this.router.navigate(['/pokemons'])
  }



}
