import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginGuardian } from './login/login-guardian.service';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component:UsuariosComponent}, //usando el guardián con /usuarios
  {path: 'usuarios', component: UsuariosComponent ,children: [
    {path: 'agregar', component: FormularioComponent}, 
    {path: ':id', component: FormularioComponent}, 
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
