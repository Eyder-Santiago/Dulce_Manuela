import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-especifico-seleccionado',
  templateUrl: './especifico-seleccionado.component.html',
  styleUrls: ['./especifico-seleccionado.component.css']
})
export class EspecificoSeleccionadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.producto);
  }

  @Input() producto:Producto={
    id:0,
    nombre:"",
    precio:0,
    stock:0,
    urlImagen:"",
    estado:0
   
  }

  


}
