import { Component, Input } from '@angular/core';
import { DetallePedido } from 'src/app/modelo/detallePedido';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.css']
})
export class DetallePedidosComponent {

  @Input() detalle:DetallePedido[] = [];
  
}
