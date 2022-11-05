import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoNequiComponent } from './pago-nequi/pago-nequi.component';
import { PagoContraEntregaComponent } from './pago-contra-entrega/pago-contra-entrega.component';



@NgModule({
  declarations: [
    PagoNequiComponent,
    PagoContraEntregaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagoNequiComponent
  ]
})
export class FormasDePagoModule { }
