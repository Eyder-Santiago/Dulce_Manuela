import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  usuarios:Usuario[] = [];

  constructor(private servicioUsuario : UsuarioService){
  
  }

  cargarUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe((res: Usuario[]) => {
      this.usuarios = res;
    });
  }
  
  onUsuarioCreado(usuario : Usuario){
    this.cargarUsuarios();
    console.log(usuario);
  }
  
  onUsuarioEliminado(usuario:Usuario){
    this.cargarUsuarios();
    console.log(usuario);
  }
  
  onUsuarioEditado(usuario:Usuario){2
    this.cargarUsuarios();
    console.log(usuario);
  }

  ngOnInit(): void {
    this.cargarUsuarios(); //lista los usuarios automáticamente
  }

}
