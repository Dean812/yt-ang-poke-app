import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; // no need le commmonModule
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [

  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: 'pokemons', component: ListPokemonComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
