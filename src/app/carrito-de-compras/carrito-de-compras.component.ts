import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../modelo/productoCarrito';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

  constructor(
    public productoService: ProductoService
  ) { }

  productosCarrito: ProductoCarrito[] = [];


  ngOnInit(): void {
    //this.productosCarrito = this.productoService.obtenerLocalStorageArray();
    this.productoService.productosCarrito$.subscribe(lista => this.productosCarrito = lista);
  }
}
