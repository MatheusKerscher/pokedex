import { Component, Input, OnInit } from '@angular/core';
import { Types } from 'src/app/shared/models/pokemon/pokemon.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() classForPokemonType?: string;
  @Input() types?: Types[]
  @Input() height?: number;
  @Input() weight?: number
  @Input() imgPokemonUrl?: string;
  @Input() pokemonName?: string;

  constructor() {}

  ngOnInit(): void {}
}
