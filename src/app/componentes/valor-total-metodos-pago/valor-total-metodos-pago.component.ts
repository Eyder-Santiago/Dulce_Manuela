import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../modelo/productoCarrito';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-valor-total-metodos-pago',
  templateUrl: './valor-total-metodos-pago.component.html',
  styleUrls: ['./valor-total-metodos-pago.component.css']
})
export class ValorTotalMetodosPagoComponent implements OnInit {

  constructor(
    public productoService: ProductoService
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

}
