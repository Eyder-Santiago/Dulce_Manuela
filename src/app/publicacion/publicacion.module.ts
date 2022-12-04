import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ExhibirComponent } from './exhibir/exhibir.component';
import { FormsModule } from '@angular/forms';
import { PublicacionRoutingModule } from './publicacion-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CrearComponent,
    EliminarComponent,
    ExhibirComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicacionRoutingModule,
    HttpClientModule
  ]
})
export class PublicacionModule { }
