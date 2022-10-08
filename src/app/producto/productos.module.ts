import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './edicion/edicion.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    ListadoComponent,
    RegistroComponent,
    EdicionComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    RegistroComponent,
    ListadoComponent //llenar para usarse en otras clases
  ]
})
export class ProductosModule { }

