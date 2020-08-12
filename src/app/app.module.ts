import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './demo-material-module';
import {AdministradorModule} from './modules/administrador/administrador.module';
import {ProfissionalModule} from './modules/profissional/profissional.module';
import {PublicModule} from './modules/public/public.module';
import {UserModule} from './modules/user/user.module';
import {AuthGuard} from './service/auth/auth.guard';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    AdministradorModule,
    ProfissionalModule,
    PublicModule,
    UserModule
  ],
  providers: [AuthGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
