import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { AsignPasswordComponent } from './asign-password/asign-password.component';

const routes: Routes = [
  {
    path: 'registrar',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget-password', //retrieve-password
    component: RetrievePasswordComponent
  },
  {
    path: 'asign-password',
    component: AsignPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
