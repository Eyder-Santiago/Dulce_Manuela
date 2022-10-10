import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EdicionComponent } from './edicion/edicion.component';
import { ListadoComponent } from './listado/listado.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CifrarComponent } from './cifrar/cifrar.component';
import { LayoutComponent } from './layout/layout.component';

import { UsuariosRoutingModule } from './usuarios-routing';

@NgModule({
  declarations: [
    RegistroComponent,
    EdicionComponent,
    ListadoComponent,
    EliminarComponent,
    CifrarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsuariosRoutingModule,
  ],
  exports:[
    RegistroComponent,
    ListadoComponent, //llenar para usarse en otras clases
    EdicionComponent,
    EliminarComponent,
  ]
})
export class UsuarioModule { }
