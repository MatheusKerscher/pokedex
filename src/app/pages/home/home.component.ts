import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe((result) => {
      this.pokemons = result;
      console.log('Fim');
    });
  }
}
