import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfissionalComponent} from './profissional.component';
import {HomeProfissionalComponent} from './home-profissional/home-profissional.component';
import {prefixProf} from '../../variable';

const routes: Routes = [{
  path: '', component: ProfissionalComponent, children: [
    {path: '', redirectTo: '/' + prefixProf + 'home', pathMatch: 'full'},
    {path: prefixProf + 'home', component: HomeProfissionalComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule {
}
