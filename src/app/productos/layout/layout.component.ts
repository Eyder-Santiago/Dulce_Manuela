import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  productos:Producto[] = [];

  constructor(private productoService : ProductoService){
  
  }

  cargarProductos(){
    this.productoService.getProductos().subscribe((res: Producto[]) => {
      this.productos = res;
    });
  }
  
  onProductoCreado(producto : Producto){
    this.cargarProductos();
    console.log(producto);
  }
  
  onProductoEliminado(producto:Producto){
    this.cargarProductos();
    console.log(producto);
  }
  
  onProductoEditado(producto:Producto){
    this.cargarProductos();
    console.log(producto);
  }

  ngOnInit(): void {
    this.cargarProductos(); //lista los usuarios automáticamente
  }

}
