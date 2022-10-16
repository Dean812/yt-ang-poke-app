import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] | undefined; // récupération de la liste de pokemon via la classe pokemon sous forme d'array (propriété) 
  pokemon: Pokemon | undefined;  // pokemon courant via la class pokemon, les données récupéré rentrerons dedans

  constructor(private route: ActivatedRoute) { }  //access to router in order to get the ID  (pokemon/id) , injection dans le composant, récupère l'id qui est dans l'url.

  ngOnInit() {

    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); // récupération de l'id
    // sapshot : la donnée a l'instant T , paramMap : des paramères  transmit via paramMap ( via un tableau avec tout les paramètres)
    // le service route renvoie un string     -------------           number ou null 
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId); // rappel pokemonId est un string , le + le passe en type number
    } // dans this.pokemon, on rentre dans la liste , on cherche s'il y a correspondance  

  }

}
