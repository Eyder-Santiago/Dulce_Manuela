import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'usuarios',
    //component: LayoutComponent
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
