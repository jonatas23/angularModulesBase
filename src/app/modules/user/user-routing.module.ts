import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {HomeUserComponent} from './home-user/home-user.component';

const prefix:string = 'user/';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    {path: '', redirectTo: '/' + prefix + 'home', pathMatch: 'full'},
    {path: prefix + 'home', component: HomeUserComponent},
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
