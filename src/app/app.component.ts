import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{  pokemons[0]  }} !
      </h1>
    </div>
  `,
  styles: []
})

export class AppComponent {
  pokemons = ['Bulbizare', 'Salamèche', 'Carapuce'];
}
