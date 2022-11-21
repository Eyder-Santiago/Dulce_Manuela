import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styleUrls: ['./especifico.component.css']
})
export class EspecificoComponent implements OnInit {

  @Output() productoSeleccionado = new EventEmitter<Producto>();

  productos:Producto[]=[];




  // public producto:Producto = new Producto("",0,0,0);
 
   @Input() producto:Producto={
     id:0,
     nombre:"",
     precio:0,
     stock:0,
     urlImagen:"",
     estado:0
    
   }

   



  constructor(
    public servicioProducto:ProductoService
  ) { }

  //por primera vez, se emitirán todos los productos, con la función mostrarProductoSeleccionado, se accede al que en la tienda el usuario dio click
  ngOnInit(): void {
    this.mostrarProductoSeleccionado();
    
  }

  mostrarProductoSeleccionado(){
    console.log(this.productoSeleccionado.emit);
    console.log(this.producto);
    //this.enviarEspecifico.funcionAgrupadora(this.producto);
    this.servicioProducto.productoSeleccionadoCliente(this.producto);
    this.productos.push(this.producto);
  }
}



