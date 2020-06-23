import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserComponent } from './user.component';
import {HeaderComponent} from './layout/header/header.component';
import {DemoMaterialModule} from '../../demo-material-module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


@NgModule({
  declarations: [HomeUserComponent, UserComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoMaterialModule,
  ]
})
export class UserModule { }
