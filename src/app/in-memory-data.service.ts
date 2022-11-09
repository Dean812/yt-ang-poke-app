import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-list';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { POKEMONS } // Les éléments mis en place 
  } // dans cette page simule une API 
  // il nous faut déclarer cette api , voir dans app.module
}
