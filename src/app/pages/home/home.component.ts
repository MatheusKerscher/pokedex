import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';
import { ModalDetailsComponent } from 'src/app/components/modal-details/modal-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';
import { SelectOption } from 'src/app/shared/models/common/select-option/select-option.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  p: number = 1;
  result: Pokemon[] = [];
  pokemons: Pokemon[] = [];

  types: SelectOption[] = [
    { value: 'all', label: 'Todos', selected: true },
    { value: 'bug', label: 'Bug', selected: false },
    { value: 'dark', label: 'Dark', selected: false },
    { value: 'dragon', label: 'Dragon', selected: false },
    { value: 'electric', label: 'Electric', selected: false },
    { value: 'fairy', label: 'Fairy', selected: false },
    { value: 'fighting', label: 'Fighting', selected: false },
    { value: 'fire', label: 'Fire', selected: false },
    { value: 'flying', label: 'Flying', selected: false },
    { value: 'grass', label: 'Grass', selected: false },
    { value: 'ghost', label: 'Ghost', selected: false },
    { value: 'ground', label: 'Ground', selected: false },
    { value: 'ice', label: 'Ice', selected: false },
    { value: 'normal', label: 'Normal', selected: false },
    { value: 'poison', label: 'Poison', selected: false },
    { value: 'psychic', label: 'Psychic', selected: false },
    { value: 'rock', label: 'Rock', selected: false },
    { value: 'steel', label: 'Steel', selected: false },
    { value: 'shadow', label: 'Shadow', selected: false },
    { value: 'water', label: 'Water', selected: false },
  ];

  public formPokemonType: FormGroup = new FormGroup({
    type: new FormControl(null),
  });

  constructor(
    private pokeapiService: PokeapiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe((result) => {
      this.result = result;
      this.pokemons = result;
    });
  }

  openModal(p: Pokemon) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {
      centered: true,
    });

    modalRef.componentInstance.pokemon = p;
  }

  pokemonsFilter() {
    const type = this.formPokemonType.get('type')?.value;

    if (type != null) {
      this.p = 1;

      if (type == 'all') {
        this.pokemons = this.result;
      } else {
        this.pokemons = this.result.filter((p) => {
          return p.types?.some((t) => t.type?.name == type);
        });
      }
    } else {
      this.pokemons = this.result;
    }
  }
}
