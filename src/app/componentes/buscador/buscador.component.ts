import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() productoSeleccionado = new EventEmitter<Producto>();

  link:string = 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/D65K3MSUSJHB3AX5DTTVHK5X5E.jpg';
  filterProduct = "";

  productos:Producto[]=[];



  @Input() producto:Producto={
    id:0,
    nombre:"",
    precio:0,
    stock:0,
    urlImagen:"",
    estado:1,
  }

  constructor(
    public productoService : ProductoService,
    public router : Router,
  ) { }

  //productoDevuelto:Array<Producto> = this.productoService.productoDevuelto();

  cargarProductos(){
    this.productoService.getProductos().subscribe((res: Producto[]) => {
      this.productos = res;

    });
  }

  getProductos(producto2:Producto[]){
    let mensaje : string = "El correo no existe";

    for(let p of producto2){
      this.producto.id = p.id;
      this.producto.nombre = p.nombre;
      this.producto.precio = p.precio;
      this.producto.stock = p.stock;
      this.producto.urlImagen = p.urlImagen;
      this.producto.estado = p.estado;
    }
  }

  validarArticulo(){
    alert("Producto añadido exitosamente ");

    let resultado:boolean = confirm("¿Quieres ir al carrito de compras ahora mismo?");

    if (resultado){
      this.router.navigate(["productos/especifico-selected"]);
    }
  }

  //evento que manda el producto que el cliente ha seleccionado y lo desea editar
  onProductoSeleccionado(producto:Producto){
    console.log(producto);
    this.productoSeleccionado.emit(producto);
  }



  ngOnInit(): void {
    this.cargarProductos();
  }

}


