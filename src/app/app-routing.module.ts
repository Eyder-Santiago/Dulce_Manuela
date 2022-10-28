import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
