import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: 'pokemon-form.component.html',
  styleUrls: ['pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  types!: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router //redirection dans le onSubmit
    ) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }
// ce formulaire va servir a éditer via un systeme de checkbox/radio
// les 3 méthodes ont pour but 1 cocher le type par défaut du pokemon
//gérer la selection du type si modification et le onSubmit 

  hasType(type: string): boolean { // l'include vient comparer le type placer en méthode et ceux de la liste
    return this.pokemon.types.includes(type); 
  }

  selectType($event: Event, type: string){  // vérifier l'état du click + gestion du type 
    // const isChecked = $event.target.checked;  << ca ne passe pas, conflit entre html et angular
    const isChecked = ($event.target as HTMLInputElement).checked; // <<< du coup,   on cast 

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
  }

isTypesValid(type: string): boolean {

  if(this.pokemon.types.length == 1 && this.hasType(type)){
    return false;
  }

  if(this.pokemon.types.length > 2 && !this.hasType(type)){
    return false;
  }
return true;
}

  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(['/pokemons',this.pokemon.id])
  }

}