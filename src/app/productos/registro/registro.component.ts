import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{


  @Output() productoCreado = new EventEmitter<Producto>();
  
  @Output() productoEditado = new EventEmitter<Producto>();

  @Input() producto:Producto = new Producto("",0,0,0);




  constructor(public servicioProducto:ProductoService) { }

  ngOnInit(): void {
  }

  //se define la función ccrear que será llamada cuando se de clic en registrar
  agregarProducto() : void{
    this.servicioProducto.crearProducto(this.producto).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.productoCreado.emit(this.producto);
      this.producto = new Producto("", 0, 0, 0);
    }
    );
  }

  modificarProducto() : void{
    this.servicioProducto.editarProducto(this.producto).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.productoEditado.emit(this.producto);
      //this.producto = new Producto("", 0, 0, 0);
    }
    );

  }

  





}
