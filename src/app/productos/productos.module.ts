import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './edicion/edicion.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LayoutComponent } from './layout/layout.component';

import { ProductosRoutingModule } from './productos-routing.module';


@NgModule({
  declarations: [
    ListadoComponent,
    RegistroComponent,
    EdicionComponent,
    EliminarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
