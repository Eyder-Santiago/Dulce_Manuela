import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../modelo/producto';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  indice:number = 0;

  @Output() productoEliminado = new EventEmitter<Producto>();

  @Output() productoEditado = new EventEmitter<Producto>();

  @Input() productos:Producto[]=[];
  constructor(private servicioProducto:ProductoService) { 

    //this.productos = servicioProducto.getProductos();


  }

  onProductoEliminado(producto:Producto){
    this.productoEliminado.emit(producto);
  }

  onProductoEditado(producto:Producto){
    this.productoEditado.emit(producto);
  }



  ngOnInit(): void {

  }

 

}
