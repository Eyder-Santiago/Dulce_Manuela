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

  loginbtn:boolean;
  logoutbtn:boolean;

  /*
  title = 'sitio-videos';
  constructor(private dataService: ApiService) {
  dataService.getLoggedInName.subscribe(name => this.changeName(name));
  if(this.dataService.isLoggedIn())
  {
  console.log("loggedin");
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }
  
  }
  */
  
  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  logout()
  {
  //this.dataService.deleteToken();
  window.location.href = "/pagina_principal";
  
  }
}