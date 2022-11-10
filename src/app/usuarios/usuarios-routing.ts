import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { YourselfEditComponent } from './yourself-edit/yourself-edit.component';

const routes: Routes = [
  {path: '', component:LayoutComponent},
  {path: 'auto-edit', component:YourselfEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
