import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent }, // ▼ route plus précise en haut
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent }, // ▲ au route plus global en bas 
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // formsModule - en complément de celui dans app.module (must do - directives etc.)
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
