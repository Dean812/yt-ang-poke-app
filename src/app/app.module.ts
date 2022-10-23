import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule, // chargé d'abord le module pour éviter les erreurs
    AppRoutingModule, // mettre en dernier ? 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
