import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../../modelo/pedido';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-pagos-contraentrega',
  templateUrl: './pagos-contraentrega.component.html',
  styleUrls: ['./pagos-contraentrega.component.css']
})
export class PagosContraentregaComponent {

  constructor(
    private pedidoService: PedidoService,
  ) { }

  @Input() mostrarPago: boolean = false;
  @Input() pedido:Pedido = new Pedido();

  @Output() formularioCerrado = new EventEmitter<Boolean>();
  @Output() pedidoCreado = new EventEmitter<Pedido>();

  direccion:string = "";

  ocultarPago() {
    this.mostrarPago = false;
    this.formularioCerrado.emit(this.mostrarPago);
  }

  crearPedido() {
    if (this.direccion.trim() === "") {
      alert('Debe ingresar la dirección');
      return;
    }
    this.pedido.medioPago = "Contraentrega";
    this.pedido.informacionPago = "El pedido será pagado contraentrega, dirección: " + this.direccion;
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
