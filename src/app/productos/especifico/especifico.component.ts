import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styleUrls: ['./especifico.component.css']
})
export class EspecificoComponent implements OnInit {

  @Output() productoSeleccionado = new EventEmitter<Producto>();

  productos:Producto[]=[];

  //public nombre: string = "";




  // public producto:Producto = new Producto("",0,0,0);
 
   @Input() producto:Producto={
     id:0,
     nombre:"",
     precio:0,
     stock:0,
     urlImagen:"",
     descripcion:"",
     estado:0
    
   }

   
   



  constructor(
    public servicioProducto:ProductoService,
    //private cookieService: CookieService

  ) {
    
   }



  //por primera vez, se emitirán todos los productos, con la función mostrarProductoSeleccionado, se accede al que en la tienda el usuario dio click
  ngOnInit(): void {
    this.mostrarProductoSeleccionado();
    //console.log(this.producto);
    //this.cookieService.set('', this.producto.nombre);

  
  }

  mostrarProductoSeleccionado(){
    let nombre:string = '';
    //console.log(this.productoSeleccionado.emit);
    //console.log(this.producto);
    this.servicioProducto.guardarAlLocalStorage(this.producto);
    //console.log(this.producto.nombre);
    //this.enviarEspecifico.funcionAgrupadora(this.producto);
    //this.servicioProducto.productoSeleccionadoCliente(this.producto);
    nombre = this.producto.nombre;
    //this.cookieService.set('nombre',nombre);
    this.productos.push(this.producto);
  }
}



