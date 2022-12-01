import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoCarrito } from 'src/app/modelo/productoCarrito';
//import { CookieService } from 'ngx-cookie-service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-especifico-seleccionado',
  templateUrl: './especifico-seleccionado.component.html',
  styleUrls: ['./especifico-seleccionado.component.css']

})
export class EspecificoSeleccionadoComponent implements OnInit {
  

  constructor(
    public servicioProducto:ProductoService,
    public router : Router
    ) {
    //this.cookieService.set('Test', 'Hello World');
    //this.cookieValue = this.cookieService.get('Test');
  }

  productoCarrito : Producto[] = [];
  

  ngOnInit(): void {
    //console.log(this.producto);
    this.funcionAuxLocalStorage();
  }

  @Input() producto:Producto={
    id:0,
    nombre:"",
    precio:0,
    stock:0,
    urlImagen:"",
    descripcion:"",
    estado:1
  }

  cantidad :number = 0;

  funcionAuxLocalStorage(){
    let varProducto : Producto; 
    varProducto = this.servicioProducto.obtenerLocalStorage();
    //console.log(varProducto);

    this.producto.id = varProducto.id;
    this.producto.nombre = varProducto.nombre;
    this.producto.precio = varProducto.precio;
    this.producto.stock = varProducto.stock;
    this.producto.urlImagen = varProducto.urlImagen;
    this.producto.descripcion = varProducto.descripcion;
    this.producto.estado = varProducto.estado;

  }

  irACarrito(){
    this.router.navigate(["tienda"]);
  }

  agregarEnCarrito(){
    let varProducto : Producto; 
    varProducto = this.servicioProducto.obtenerLocalStorage();
    let productoCarrito = new ProductoCarrito(this.cantidad, varProducto);

    // this.productoCarrito.push(varProducto);
    // console.log(this.productoCarrito);
    this.servicioProducto.agregarEnCarrito(productoCarrito);
  }

  


}
