import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() idOfPassword = new EventEmitter<Producto>();

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
    public productoService : ProductoService
  ) { }


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


  

  ngOnInit(): void {
    this.cargarProductos();
  }

}
