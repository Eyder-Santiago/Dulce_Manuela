import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegistroComponent } from './registro/registro.component';
import { EdicionComponent } from './edicion/edicion.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EspecificoComponent } from './especifico/especifico.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'agregar',
    component: RegistroComponent
  },
  {
    path: 'editar',
    component: EdicionComponent
  },
  {
    path: 'eliminar',
    component:EliminarComponent
  },
  {
    path: 'especifico',
    component:EspecificoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
