import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoNequiComponent } from './pago-nequi/pago-nequi.component';



@NgModule({
  declarations: [
    PagoNequiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagoNequiComponent
  ]
})
export class FormasDePagoModule { }
