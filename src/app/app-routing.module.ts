import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './usuario/listado/listado.component';
import { UsuarioModule } from './usuario/usuarios.module';


const routes: Routes = [
  {path: '', component:UsuarioModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
