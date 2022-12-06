import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../modelo/productoCarrito';
import { ProductoService } from '../../servicios/producto.service';
import { PedidoService } from '../../servicios/pedido.service';
import { Pedido } from '../../modelo/pedido';
import { DetallePedido } from '../../modelo/detallePedido';
import { Token } from '../../modelo/token';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-valor-total-metodos-pago',
  templateUrl: './valor-total-metodos-pago.component.html',
  styleUrls: ['./valor-total-metodos-pago.component.css']
})
export class ValorTotalMetodosPagoComponent implements OnInit {

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private tokenService: TokenService
  ) { }

  precioTotal:number = 0;

  ngOnInit(): void {
    this.productoService.productosCarrito$.subscribe(lista => {
      this.precioTotal = 0;
      for(let p of lista) {
        this.precioTotal += p.producto.precio * p.cantidad;
      }
    });
  }

  crearPedido() {
    let token:Token = JSON.parse(this.tokenService.obtenerToken());
    let carrito:ProductoCarrito[] = this.productoService.obtenerLocalStorageArray();
    let detalles:DetallePedido[] = [];
    let pedido = new Pedido(0, 0, 0, "Nequi", "Cuenta Nequi: 123456", "nuevo", "", token.idUsuario, undefined, detalles);
    for (let item of carrito) {
      let detalle:DetallePedido = new DetallePedido(0, 0, item.producto.id, undefined, item.cantidad, 0, 0);
      detalles.push(detalle);
    }

    pedido.detalles = detalles;
    this.pedidoService.crearPedido(pedido).subscribe(result => console.log(result));
  }

}
