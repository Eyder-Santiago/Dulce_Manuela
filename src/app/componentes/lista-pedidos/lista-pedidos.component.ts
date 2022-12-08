import { Component, Input } from '@angular/core';
import { DetallePedido } from 'src/app/modelo/detallePedido';
import { Pedido } from '../../modelo/pedido';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {
  @Input() pedidos:Pedido[] = [];

  @Input() detalle:DetallePedido[] = [];
  mostrarDetalle:boolean = false;
  pedidoSeleccionado:Pedido = new Pedido();

  onDetalleCerrado(value:boolean):void {
    this.mostrarDetalle = value;
  }

  mostrarDetalleEsp(pedido:Pedido, event:Event):void {
    event.preventDefault();
    this.pedidoSeleccionado = pedido;
    this.mostrarDetalle = true;
  }
}
