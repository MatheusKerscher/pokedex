import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/inputs/label/label.component';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSearchComponent } from './components/inputs/input-search/input-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LabelComponent,
    InputSelectComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    InputSelectComponent,
    InputSearchComponent
  ]
})
export class SharedModule { }
