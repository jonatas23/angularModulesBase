import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { ProfissionalComponent } from './profissional.component';
import { HomeProfissionalComponent } from './home-profissional/home-profissional.component';


@NgModule({
  declarations: [ProfissionalComponent, HomeProfissionalComponent],
  imports: [
    CommonModule,
    ProfissionalRoutingModule
  ]
})
export class ProfissionalModule { }
