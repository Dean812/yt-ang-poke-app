import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ajout à la mano
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';  // déclaration 1.1
import { InMemoryDataService } from './in-memory-data.service' // déclaration 1.2 - on utilise le service we kjust created

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //* + haut car on pourrait l'utilisé partout + loading dans pokemon module 
    HttpClientModule,         // lastest addition  
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule, // chargé d'abord le module pour éviter les erreurs
    AppRoutingModule, // mettre en dernier ? 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
