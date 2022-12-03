import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service';


@Component({
  selector: 'app-exhibir',
  templateUrl: './exhibir.component.html',
  styleUrls: ['./exhibir.component.css']
})
export class ExhibirComponent implements OnInit {

  publicacion : Publicacion[] = [];

  constructor(public servicioPublicacion : PublicacionService){
    
  }

  cargarPublicaciones(){
    this.servicioPublicacion.getPublicacion().subscribe((res: Publicacion[]) => {
      this.publicacion = res;
    });
  }

  
  ngOnInit(): void {
    this.cargarPublicaciones();
  }

}
