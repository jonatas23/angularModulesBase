import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfissionalComponent} from './profissional.component';
import {HomeProfissionalComponent} from './home-profissional/home-profissional.component';

const prefix:string = 'prof/';

const routes: Routes = [{
  path: '', component: ProfissionalComponent, children: [
    {path: '', redirectTo: '/' + prefix + 'home', pathMatch: 'full'},
    {path: prefix + 'home', component: HomeProfissionalComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule {
}
