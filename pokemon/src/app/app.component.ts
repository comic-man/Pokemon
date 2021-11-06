import { Component, OnInit } from '@angular/core';
import { PokemonSerivceService } from './pokemon-services/pokemon-serivce.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  pokemon: any;
  pokemonlist: string[] = [];
  constructor(private pokemonSerivce: PokemonSerivceService) {}

  NgOnInit() {
    this.pokemon = JSON.parse(<string>localStorage.getItem('pokemon'))
  }
}
onGetPokemon(pokemon: string): void {
  this.pokemonSerivce.getPokemon().subscribe(pokemon => {
    this.pokemon = pokemon);
  }; 
}
}