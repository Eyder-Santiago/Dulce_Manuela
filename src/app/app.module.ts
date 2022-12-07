import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

import { RetrievePasswordComponent } from './cuenta/retrieve-password/retrieve-password.component';
import { AsignPasswordComponent } from './cuenta/asign-password/asign-password.component';

import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { ProductoCarritoComponent } from './componentes/producto-carrito/producto-carrito.component';
import { ValorTotalMetodosPagoComponent } from './componentes/valor-total-metodos-pago/valor-total-metodos-pago.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BtnWhatsappComponent } from './componentes/btn-whatsapp/btn-whatsapp.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EspecificoComponent } from './productos/especifico/especifico.component';
//import { ProductosComponent } from './especifico-seleccionado/productos/productos.component';
import { EspecificoSeleccionadoComponent } from './productos/especifico-seleccionado/especifico-seleccionado.component';
import { PublicacionModule } from './publicacion/publicacion.module';
import { PagosNequiComponent } from './componentes/pagos-nequi/pagos-nequi.component';
import { PagosContraentregaComponent } from './componentes/pagos-contraentrega/pagos-contraentrega.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { ListaPedidosComponent } from './componentes/lista-pedidos/lista-pedidos.component';
import { UploadFilesComponent } from './componentes/upload-files/upload-files.component';
import { DetallePedidosComponent } from './componentes/detalle-pedidos/detalle-pedidos.component'
//import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    CarritoDeComprasComponent,
    ProductoCarritoComponent,
    ValorTotalMetodosPagoComponent,
    HeaderComponent,
    SobreNosotrosComponent,
    TiendaComponent,
    BtnWhatsappComponent,
    FilterPipe,
    EspecificoComponent,
    EspecificoSeleccionadoComponent,
    PagosNequiComponent,
    PagosContraentregaComponent,
    PedidosComponent,
    MisPedidosComponent,
    ListaPedidosComponent,
    UploadFilesComponent,
    DetallePedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PublicacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
