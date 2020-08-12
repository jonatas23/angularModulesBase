import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {AdministradorComponent} from './administrador.component';
import {HomeAdministradorComponent} from './home-administrador/home-administrador.component';
import {SpinnerComponent} from './layouts/config/spinner.component';
import {AppSidebarComponent} from './layouts/full/sidebar/sidebar.component';
import {FullComponent} from './layouts/full/full.component';
import {AppHeaderComponent} from './layouts/full/header/header.component';
import {SharedModule} from './layouts/config/shared.module';
import {DemoMaterialModule} from '../../demo-material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {AuthGuard} from '../../service/auth/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {MenuItems} from './menu-items';

@NgModule({
  declarations: [
    AdministradorComponent,
    HomeAdministradorComponent,
    SpinnerComponent,
    AppSidebarComponent,
    FullComponent,
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    HttpClientModule,
    DemoMaterialModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    MenuItems,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AdministradorModule {
}
