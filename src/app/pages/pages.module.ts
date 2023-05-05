import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from './services/pokeapi/pokeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER, POSITION } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsType: SPINNER.ballSpinClockwise,
  bgsColor: 'rgba(255,255,255,0)',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 60,
  bgsOpacity: 0.5,
  blur: 1,
  fgsType: SPINNER.ballSpinClockwise,
  fgsColor: '#ff0000',
  fgsPosition: POSITION.centerCenter,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  hasProgressBar: false,
  overlayColor: 'rgba(40, 40, 40, 0.6)',
};

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
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  exports: [
    HomeComponent,
  ],
  providers:[
    PokeapiService
  ]
})
export class PagesModule { }
