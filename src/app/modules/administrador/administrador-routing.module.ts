import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministradorComponent} from './administrador.component';
import {HomeAdministradorComponent} from './home-administrador/home-administrador.component';
import {prefixAdm} from './../../variable';

const routes: Routes = [{
  path: '', component: AdministradorComponent, children: [
    {path: '', redirectTo: '/' + prefixAdm + 'home', pathMatch: 'full'},
    {path: prefixAdm + 'home', component: HomeAdministradorComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
