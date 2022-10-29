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
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
