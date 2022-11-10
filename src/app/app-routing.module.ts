import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { EdicionComponent } from './productos/edicion/edicion.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productos',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'usuarios',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuarioModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaModule)
  },
  {
    path: 'carrito',
    component: CarritoDeComprasComponent
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'pagos',
    loadChildren: () => import('./formas-de-pago/formas-de-pago.module').then(m => m.FormasDePagoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
