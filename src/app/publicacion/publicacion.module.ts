import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ExhibirComponent } from './exhibir/exhibir.component';
import { FormsModule } from '@angular/forms';
import { PublicacionRoutingModule } from './publicacion-routing.module';



@NgModule({
  declarations: [
    CrearComponent,
    EliminarComponent,
    ExhibirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicacionRoutingModule
  ]
})
export class PublicacionModule { }
