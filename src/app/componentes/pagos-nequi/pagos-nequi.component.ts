import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../../modelo/pedido';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-pagos-nequi',
  templateUrl: './pagos-nequi.component.html',
  styleUrls: ['./pagos-nequi.component.css']
})
export class PagosNequiComponent {
  constructor(
    private pedidoService: PedidoService,
  ) { }

  @Input() mostrarPago: boolean = false;
  @Input() pedido:Pedido = new Pedido();

  @Output() formularioCerrado = new EventEmitter<Boolean>();
  @Output() pedidoCreado = new EventEmitter<Pedido>();

  ocultarPago() {
    this.mostrarPago = false;
    this.formularioCerrado.emit(this.mostrarPago);
  }

  crearPedido() {
    this.pedido.medioPago = "Nequi";
    this.pedido.informacionPago = "Revisar el comprobante de Nequi recibido en el número 3113189264";
    this.pedidoService.crearPedido(this.pedido).subscribe(result => {
      if (result.exitoso === 1) {
        this.ocultarPago();
        this.pedidoCreado.emit(result.pedido);
      }
      else {
        alert(result.mensaje);
      }
    });
  }
}
