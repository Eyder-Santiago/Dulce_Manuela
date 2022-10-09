import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {

  mostrarFormulario : boolean = false; //muestra u oculta el form

  @Output() productoEditado = new EventEmitter<Producto>();

 // public producto:Producto = new Producto("",0,0,0);

  @Input() producto:Producto={
    id:0,
    nombre:"",
    precio:0,
    stock:0,
    estado:0
   
  }



  constructor(public servicioProducto:ProductoService) { }

  ngOnInit(): void {
  }

  modificarProducto() : void{
    this.mostrarFormulario = true;
  }

  cerrarFormulario(){
    this.mostrarFormulario = false;
  }

  notificarActualizacion(){
    this.cerrarFormulario();
    this.productoEditado.emit(this.producto);
  }


}
