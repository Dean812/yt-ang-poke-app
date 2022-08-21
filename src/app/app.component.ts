import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent) {  //1.2 en vue de l'utilisation de $event dans le html
    // l'event ici ▲ ne suffit pas, il est nécessaire d'utiliser le MouseEvent 
    const index: number = +(event.target as HTMLInputElement).value;
    // 1.3 index: number car on souhaite récupérer un chiffre ( voir html)
    // event.target pour utilser le event, cependant il faut le casté, d'ou le 'as HTMLInputElement'  
    // Afin de récupérer la valeur, on fini avec le .value, cependant , il return un String
    // le +   permet de passer le type string en type number.
    console.log(`vous avez cloqué sur le pokémon ${this.pokemonList[index].name}`);
    // si on ne met pas de chiffre, la valeur null devient 0 ( systeme JS), on aura donc bulbizarre ( car pokemonList[0].name >> bulbizarre)
  }

}
