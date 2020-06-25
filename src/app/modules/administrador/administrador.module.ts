import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {AdministradorComponent} from './administrador.component';
import {HomeAdministradorComponent} from './home-administrador/home-administrador.component';
import {AuthGuard} from '../../service/auth/auth.guard';

@NgModule({
  declarations: [
    AdministradorComponent,
    HomeAdministradorComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ],
  providers: [
    AuthGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AdministradorModule {
}
