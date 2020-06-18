import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [HomeUserComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
