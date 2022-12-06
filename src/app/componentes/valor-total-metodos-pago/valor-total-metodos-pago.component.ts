import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { PedidoService } from '../../servicios/pedido.service';
import { Pedido } from '../../modelo/pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valor-total-metodos-pago',
  templateUrl: './valor-total-metodos-pago.component.html',
  styleUrls: ['./valor-total-metodos-pago.component.css']
})
export class ValorTotalMetodosPagoComponent implements OnInit {

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private router:Router
  ) { }

  precioTotal:number = 0;
  pedido:Pedido = new Pedido();

  mostrarNequi:boolean = false;
  mostrarContraentrega:boolean = false;

  ngOnInit(): void {
    this.productoService.productosCarrito$.subscribe(lista => {
      this.precioTotal = 0;
      for(let p of lista) {
        this.precioTotal += p.producto.precio * p.cantidad;
      }
    });
  }

  generarPedido() {
    this.pedido = this.pedidoService.generarPedido();
  }

  mostrarPagoNequi() {
    this.generarPedido();
    this.mostrarNequi = true;
  }

  cerrarPagoNequi() {
    this.mostrarNequi = false;
  }

  mostrarPagoContraentrega() {
    this.generarPedido();
    this.mostrarContraentrega = true;
  }

  cerrarPagoContraentrega() {
    this.mostrarContraentrega = false;
  }

  pedidoCreado(pedido:Pedido) {
    this.productoService.limpiarCarrito();
    alert("Se ha creado exitosamente el pedido. El número de pedido es " + pedido.id);
    this.router.navigate(["/tienda"]);
  }
}
