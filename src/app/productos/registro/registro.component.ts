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

  @Input() producto:Producto = new Producto();
  
  constructor(public servicioProducto:ProductoService) { }

  ngOnInit(): void {
  }

  //se define la función ccrear que será llamada cuando se de clic en registrar
  agregarProducto() : void{
    if(this.producto.nombre.length === 0 || this.producto.precio === 0 || this.producto.descripcion.length === 0){
      alert("no se pudo enviar");
    }else {
    this.servicioProducto.crearProducto(this.producto).subscribe(resp =>{
        //una vez se envíe el objeto local se define en blanco
        this.productoCreado.emit(this.producto);
        this.producto = new Producto();
      },
      err => {
        alert("No se pudo crear el producto: " + err.error);
      }
    );
  }
  }

  modificarProducto() : void{
    this.servicioProducto.editarProducto(this.producto).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
        this.productoEditado.emit(this.producto);
        //this.producto = new Producto("", 0, 0, 0);
        alert("Se actualizo el producto Exitosamente!")
      },
      err => {
        alert("No se pudo actualizar el producto: " + err.error);
      }
    );
  }

  archivoCargado(event:any): void {
    let archivo:File = event.target.files[0];
    console.log(archivo);

    (new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => resolve(reader.result?.toString() ?? "");
      reader.onerror = error => reject(error);
    })).then(result => this.producto.imagen = result);
  }
}
