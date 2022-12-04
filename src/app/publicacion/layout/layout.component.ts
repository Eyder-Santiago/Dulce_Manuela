import { Component } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  publicaciones:Publicacion[] = [];

  constructor(private servicioPublicacion : PublicacionService){
  
  }

  cargarPublicacion(){
    this.servicioPublicacion.getPublicacion().subscribe((res: Publicacion[]) => {
      this.publicaciones = res;
    });
  }
  
  onPublicacionCreada(publicacion : Publicacion){
    this.cargarPublicacion();
    console.log(publicacion);
  }
  
  onPublicacionEliminada(publicacion:Publicacion){
    this.cargarPublicacion();
    console.log(publicacion);
  }
  
  onPublicacionEditada(publicacion:Publicacion){
    this.cargarPublicacion();
    console.log(publicacion);
  }

  ngOnInit(): void {
    this.cargarPublicacion
    
    
    this.cargarPublicacion();
  }

}
