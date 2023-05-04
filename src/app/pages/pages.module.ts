import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from './services/pokeapi/pokeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    NgxPaginationModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
  ],
  providers:[
    PokeapiService
  ]
})
export class PagesModule { }
