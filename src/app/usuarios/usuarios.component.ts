import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuariosService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  /*
  usuarios: Usuario[] = [
    new Usuario('Margarita', 'ríos'),
    new Usuario('Lisa', 'González')
  ];
  */

  //servicio LoggingServices
  constructor(
    private usuariosServices: UsuariosService,
    private router:Router
  ){}

  ngOnInit(): void { 
    this.usuariosServices.obtenerUsuarios()
    .subscribe(
     (usuarios: Usuario[]) => {
       this.usuarios = usuarios;
       this.usuariosServices.setUsuarios(usuarios);
     }
    );
  }
   agregar(){
    //clase router, servicio
    //se dirige a la ruta personas/agregar
      this.router.navigate(['usuarios/agregar']);
  }



}
