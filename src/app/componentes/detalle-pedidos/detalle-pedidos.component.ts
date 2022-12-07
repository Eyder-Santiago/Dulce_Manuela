import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from 'src/app/modelo/pedido';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.css']
})
export class DetallePedidosComponent {

  @Input() pedido:Pedido = new Pedido();
  @Input() mostrarDetalle:boolean = false;
  
  @Output() detalleCerrado = new EventEmitter<boolean>();

  ocultarDetalle() {
    this.mostrarDetalle = false;
    this.detalleCerrado.emit(false);
  }
}
