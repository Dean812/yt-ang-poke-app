import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  pokemonList = ['Bulbizare', 'Salamèche', 'Carapuce', 'Pikachu'];

  ngOnInit() {
    this.selectPokemon("Electron");
  }

  selectPokemon(pokemon_name: string) {
    console.log(`Vous avez cliqué sur ${pokemon_name};`);

  }

}
