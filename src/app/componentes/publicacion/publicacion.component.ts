import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion:Publicacion = new Publicacion('',0,0,'',0,0,'',0,'');

  public contadorLike:number=0;
  public comentario:string='';

 // producto: Producto = new Producto()

  constructor() { }

  ngOnInit(): void {
  }

  sumarLike(){
    this.contadorLike++;
  }

}
