import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(public servicioProducto:ProductoService) { }

  @Output() productoEliminado = new EventEmitter<Producto>();

  @Input() producto:Producto={
    id:0,
    nombre:"",
    precio:0,
    stock:0,
    estado:0
   
  }



  ngOnInit(): void {
  }

  eliminar(){
    if(confirm('¿Estás seguro que quieres eliminar este producto?')){
      this.servicioProducto.eliminarProducto(this.producto).subscribe(resp=>{
        console.log(resp);
        this.productoEliminado.emit(this.producto);
        alert('El producto ha sido eliminado exitosamente');
       },
       err => {
        alert("No se pudo eliminar el producto: " + err.error);
      }); 
    }
  }

}
