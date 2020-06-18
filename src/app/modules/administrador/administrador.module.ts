import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {AdministradorComponent} from './administrador.component';
import {HomeAdministradorComponent} from './home-administrador/home-administrador.component';
import {DemoMaterialModule} from '../../demo-material-module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdministradorComponent, HomeAdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class AdministradorModule {
}
