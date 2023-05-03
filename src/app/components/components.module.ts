import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';



@NgModule({
  declarations: [
    CardPokemonComponent,
    ModalDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardPokemonComponent,
  ]
})
export class ComponentsModule { }
