import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {HomeUserComponent} from './home-user/home-user.component';
import {prefixUser} from '../../variable';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    {path: '', redirectTo: '/' + prefixUser + 'home', pathMatch: 'full'},
    {path: prefixUser + 'home', component: HomeUserComponent},
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
