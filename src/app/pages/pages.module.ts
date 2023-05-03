import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from './services/pokeapi/pokeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    NgxPaginationModule
  ],
  exports: [
    HomeComponent,
  ],
  providers:[
    PokeapiService
  ]
})
export class PagesModule { }
