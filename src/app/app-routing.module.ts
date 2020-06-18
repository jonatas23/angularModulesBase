import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/public/public.module#PublicModule'},
  {path: 'admin', loadChildren: './modules/administrador/administrador.module#AdministradorModule'},
  {path: 'user', loadChildren: './modules/user/user.module#UserModule'},
  {path: 'prof', loadChildren: './modules/profissional/profissional.module#ProfissionalModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
