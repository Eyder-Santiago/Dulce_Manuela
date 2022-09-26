import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './loggingService.service';
import { UsuariosService } from './usuariosService';
import { DataServices } from './data.services';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ErrorComponent,
    FormularioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoggingService, UsuariosService, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
