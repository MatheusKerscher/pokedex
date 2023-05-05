import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  imgPokemonUrl: string = '';

  faClose = faXmark;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.pokemon != undefined) {
      this.imgPokemonUrl =
        this.pokemon.sprites?.other?.dream_world?.front_default! ||
        this.pokemon.sprites?.front_default! ||
        this.pokemon.sprites?.front_shiny!;
    }
  }
}
