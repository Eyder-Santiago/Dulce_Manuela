import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //HttpClientModule,
    CuentaRoutingModule,
  ]
})
export class CuentaModule { }
