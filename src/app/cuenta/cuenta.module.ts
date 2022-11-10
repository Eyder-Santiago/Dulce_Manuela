import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AsignPasswordComponent } from './asign-password/asign-password.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { LayoutPasswordComponent } from './layout-password/layout-password.component';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    RetrievePasswordComponent,
    AsignPasswordComponent,
    LayoutPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //HttpClientModule,
    CuentaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CuentaModule { }
