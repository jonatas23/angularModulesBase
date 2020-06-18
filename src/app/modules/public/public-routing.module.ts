import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePublicComponent} from './home-public/home-public.component';
import {PublicComponent} from './public.component';
import {LoginPublicComponent} from './login-public/login-public.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {prefix} from './../../variable';

const routes: Routes = [{
  path: '', component: PublicComponent, children: [
    {path: '', redirectTo: '/' + prefix + 'home', pathMatch: 'full'},
    {path: prefix + 'home', component: HomePublicComponent},
    {path: prefix + 'login', component: LoginPublicComponent},
    {path: prefix + 'cadastro', component: CadastroComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
