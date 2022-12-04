import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service';


@Component({
  selector: 'app-exhibir',
  templateUrl: './exhibir.component.html',
  styleUrls: ['./exhibir.component.css']
})
export class ExhibirComponent implements OnInit {

  @Input() publicaciones : Publicacion[] = [];
  @Output() publicacionEliminada = new EventEmitter<Publicacion>;
  @Output() publicacionEditada = new EventEmitter<Publicacion>

  constructor(public servicioPublicacion : PublicacionService){
    
  }

  cargarPublicaciones(){
    this.servicioPublicacion.getPublicacion().subscribe((res: Publicacion[]) => {
      this.publicaciones = res;
    });
  }

  
  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  onPublicacionEliminado(publicacion:Publicacion){
    this.publicacionEliminada.emit(publicacion);
  }

  onPublicacionEditado(publicacion:Publicacion){
    this.publicacionEditada.emit(publicacion);
  }


}
