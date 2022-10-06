import { Component, OnInit } from '@angular/core';
import { Usuario } from './modelo/usuario';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dulce_Manuela';


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