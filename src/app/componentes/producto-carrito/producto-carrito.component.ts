import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ProductoCarrito } from '../../modelo/productoCarrito';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-producto-carrito',
  templateUrl: './producto-carrito.component.html',
  styleUrls: ['./producto-carrito.component.css']
})
export class ProductoCarritoComponent implements OnInit {

  @Input() productoCarrito: ProductoCarrito = { cantidad: 0, producto: new Producto("", 0, 0, "", "", 0) };

  constructor(
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
  }

  quitarProducto($event:Event): void {
    $event.preventDefault();
    this.productoService.quitarEnCarrito(this.productoCarrito);
  }

  actualizarProducto($event:Event): void {
    $event.preventDefault();
    this.productoService.actualizarEnCarrito(this.productoCarrito);
  }

}
