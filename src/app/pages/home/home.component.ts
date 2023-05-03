import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';
import { ModalDetailsComponent } from 'src/app/components/modal-details/modal-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  p: number = 1;
  pokemons: Pokemon[] = [];

  constructor(
    private pokeapiService: PokeapiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe((result) => {
      this.pokemons = result;
      console.log('Fim');
    });
  }

  openModal(p: Pokemon) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {
      centered: true,
    });

    modalRef.componentInstance.pokemon = p;
  }
}
