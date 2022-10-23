import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class='center'>
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"/> <!-- restrer ce type de chemin dans un autre projet -->
    <h1>Hey, cette page n'existe pas !</h1>
    <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat"> <!-- Angular fourni une directive qui permet la redirection "routerlink " --> 
      Retourner à l' accueil
    </a> <!-- quelle est le meilleur entre (click) et routerLink, aucun, il y a des avant et incon dans les 2  -->
  </div>
`,
  styles: [
  ]
})
export class PageNotFoundComponent { }
