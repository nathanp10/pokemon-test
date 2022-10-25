import { Component,OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon-list';
import { Pokemon } from './pokemon-stat';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit {
  [x: string]: any;
  title='coucou'
  
  pokemons: Pokemon[] =POKEMONS;
  pokemonSelected: Pokemon|undefined;
  

  ngOnInit() {
    console.table(this.pokemons);
  }

  selectPokemon(pokemonId:string) {
    const pokemon: Pokemon|undefined= this.pokemons.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez demandez le pokémon ${Pokemon.name}`);
      this.pokemonSelected= pokemon;
    }else {
      console.log(`Vous avez demander un pokemon qui n'existe pas. `);
      this.pokemonSelected=pokemon;
    }
  }
}
