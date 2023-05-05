import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';
import { ModalDetailsComponent } from 'src/app/components/modal-details/modal-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';
import { SelectOption } from 'src/app/shared/models/common/select-option/select-option.model';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  p: number = 1;
  result: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  haveError: boolean = false;

  faReload = faRotateRight;

  private typeAux: string = 'all';
  private nameAux: string = '';

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
    { value: 'ghost', label: 'Ghost', selected: false },
    { value: 'grass', label: 'Grass', selected: false },
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
    type: new FormControl(null, Validators.required),
  });

  public formPokemonName: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  constructor(
    private pokeapiService: PokeapiService,
    private modalService: NgbModal,
    private ngxUiLoaderService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.ngxUiLoaderService.startLoader('loader-01');
    this.pokeapiService.getPokemons().subscribe({
      next: (result) => {
        this.result = result;
        this.pokemons = result;
        this.haveError = false;
        this.ngxUiLoaderService.stopLoader('loader-01');
      },

      error: (err) => {
        console.log(err);
        this.haveError = true;
        this.ngxUiLoaderService.stopLoader('loader-01');
      },
    });
  }

  openModal(p: Pokemon) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {
      centered: true,
    });

    modalRef.componentInstance.pokemon = p;
  }

  filterPokemonByType() {
    const type = this.formPokemonType.get('type')?.value;

    if (type != null) {
      this.p = 1;

      if (type != this.typeAux) {
        this.formPokemonName.get('name')?.setValue('');
      }

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

    this.typeAux = type;
  }

  filterPokemonByName() {
    const name = this.formPokemonName.get('name')?.value;
    const type = this.formPokemonType.get('type')?.value;

    if (name != null && type != null) {
      this.p = 1;

      if (name == '' && type == 'all') {
        this.pokemons = this.result;
      } else if (name != '' && type != 'all') {
        if (this.nameAux != name) {
          this.filterPokemonByType();
        }
        this.pokemons = this.pokemons.filter((p) => {
          return p.name?.includes(name.toLowerCase());
        });
      } else if (name == '' && type != 'all') {
        this.filterPokemonByType();
      } else if (name != '') {
        if (this.nameAux != name) {
          this.filterPokemonByType();
        }

        this.pokemons = this.pokemons.filter((p) => {
          return p.name?.includes(name.toLowerCase());
        });
      } else {
        this.pokemons = this.result;
      }
    }

    this.nameAux = name;
  }
}
