import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoContraEntregaComponent } from './pago-contra-entrega/pago-contra-entrega.component';
import { PagoNequiComponent } from './pago-nequi/pago-nequi.component';

const routes: Routes = [
    {
        path: 'pago-contra-entrega',
        component:PagoContraEntregaComponent
    },
    {
        path: 'pago-nequi',
        component:PagoNequiComponent
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagosRouting {}
