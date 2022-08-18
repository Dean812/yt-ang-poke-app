import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{  pokemonList[0]  }} !
      </h1>
    </div>
  `,
  styles: []
})

export class AppComponent implements OnInit {
  pokemonList = ['Bulbizare', 'Salamèche', 'Carapuce', 'Pikachu'];

  ngOnInit() {

    console.table(this.pokemonList)

  }

}
