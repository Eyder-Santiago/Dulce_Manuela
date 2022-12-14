import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

import { RetrievePasswordComponent } from './cuenta/retrieve-password/retrieve-password.component';
import { AsignPasswordComponent } from './cuenta/asign-password/asign-password.component';

import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductoCarritoComponent } from './componentes/producto-carrito/producto-carrito.component';
import { ValorTotalMetodosPagoComponent } from './componentes/valor-total-metodos-pago/valor-total-metodos-pago.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { FormasDePagoModule } from './formas-de-pago/formas-de-pago.module';
import { PagoNequiComponent } from './formas-de-pago/pago-nequi/pago-nequi.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BtnWhatsappComponent } from './componentes/btn-whatsapp/btn-whatsapp.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PagosModule } from './pagos/pagos.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    CarritoDeComprasComponent,
    ProductoComponent,
    ProductoCarritoComponent,
    ValorTotalMetodosPagoComponent,
    PublicacionComponent,
    HeaderComponent,
    SobreNosotrosComponent,
    TiendaComponent,
    BtnWhatsappComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormasDePagoModule,
    PagosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
