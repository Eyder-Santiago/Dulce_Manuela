import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-layout-password',
  templateUrl: './layout-password.component.html',
  styleUrls: ['./layout-password.component.css']
})
export class LayoutPasswordComponent implements OnInit {

  constructor(private servicioUsuario : UsuarioService) { }

  usuarios:Usuario[] = [];



  cargarUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe((res: Usuario[]) => {
      this.usuarios = res;
    });
  }

  editPassword(usuario : Usuario){
    this.cargarUsuarios();
    console.log(usuario);
  }

  ngOnInit(): void {
    this.cargarUsuarios(); //lista los usuarios automáticamente
  }

}
