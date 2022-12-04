import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ExhibirComponent } from './exhibir/exhibir.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearComponent,
  },
  {
    path: 'eliminar',
    component: EliminarComponent,
  },
  {
    path: 'exhibir',
    component: ExhibirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionRoutingModule { }

