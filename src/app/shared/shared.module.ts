import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/inputs/label/label.component';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LabelComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputSelectComponent
  ]
})
export class SharedModule { }
