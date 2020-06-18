import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {HomePublicComponent} from './home-public/home-public.component';
import {HeaderComponent} from './config/header/header.component';
import {DemoMaterialModule} from '../../demo-material-module';
import {LoginPublicComponent} from './login-public/login-public.component';
import {FormsModule} from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [PublicComponent, HomePublicComponent, HeaderComponent, LoginPublicComponent, CadastroComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class PublicModule {
}
