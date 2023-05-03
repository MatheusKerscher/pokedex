import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stats, Types } from 'src/app/shared/models/pokemon/pokemon.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() classForPokemonType?: string;
  @Input() types?: Types[];
  @Input() height?: number;
  @Input() weight?: number;
  @Input() pokemonId?: number;
  @Input() imgPokemonUrl?: string;
  @Input() pokemonName?: string;
  @Input() pokemonStats?: Stats[];

  @Output() emitterClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setBackgoundGradiente(id: string, statsValue: number) {
    const element = document.getElementById(id)!;

    let gradientBackground = '';

    switch (this.classForPokemonType) {
      case 'type-normal':
        gradientBackground = `linear-gradient(to right, #6a75b8 ${statsValue}%, #8f8d9a  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-fire':
        gradientBackground = `linear-gradient(to right, #1fbdff ${statsValue}%, #c0a099  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-water':
        gradientBackground = `linear-gradient(to right, #d8d87b ${statsValue}%, #e8ecfd  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-electric':
        gradientBackground = `linear-gradient(to right, #24e0ff ${statsValue}%, #d7d57e  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-grass':
        gradientBackground = `linear-gradient(to right, #9c14ff ${statsValue}%, #9c9c8f  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-ice':
        gradientBackground = `linear-gradient(to right, #f17e8a ${statsValue}%, #c0bdbc  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-fighting':
        gradientBackground = `linear-gradient(to right, #00b1ea ${statsValue}%, #a77985  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-poison':
        gradientBackground = `linear-gradient(to right, #00e14f ${statsValue}%, #967f8c  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-ground':
        gradientBackground = `linear-gradient(to right, #48b8ff ${statsValue}%, #c6bc9b  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-flying':
        gradientBackground = `linear-gradient(to right, #c5dba7 ${statsValue}%, #b7a9db  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-psychic':
        gradientBackground = `linear-gradient(to right, #4ffff0 ${statsValue}%, #e09aa8  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-bug':
        gradientBackground = `linear-gradient(to right, #0040d3 ${statsValue}%, #988f6c  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-rock':
        gradientBackground = `linear-gradient(to right, #0076ec ${statsValue}%, #a39179  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-ghost':
        gradientBackground = `linear-gradient(to right, #6fa846 ${statsValue}%, #79737f  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-dragon':
        gradientBackground = `linear-gradient(to right, #32ff32 ${statsValue}%, #8c83c6  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-dark':
        gradientBackground = `linear-gradient(to right, #3f6577 ${statsValue}%, #645c56  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-steel':
        gradientBackground = `linear-gradient(to right, #caccb9 ${statsValue}%, #bebec7  ${
          statsValue + 0.1
        }%)`;

        break;
      case 'type-fairy':
        gradientBackground = `linear-gradient(to right, #8ecdb8 ${statsValue}%, #c39fb1  ${
          statsValue + 0.1
        }%)`;

        break;

      default:
        break;
    }

    element.style.background = gradientBackground;
  }

  emmiterClick(){
    this.emitterClick.emit()
  }
}
