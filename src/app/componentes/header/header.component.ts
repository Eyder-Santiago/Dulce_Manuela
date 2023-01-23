import { Token } from 'src/app/modelo/token';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private productoService : ProductoService
  ) { }

  estaLogueado:boolean;
  esAdmin:boolean=false;

  ngOnInit(): void {
    this.tokenService.estaLogueado$.subscribe(valor => this.estaLogueado = valor);
    this.obtenerIdLogueado();
    console.log(this.esAdmin);
  }

  //vuelve y recarga la página
  obtenerIdLogueado(){
    let tokenAdmin:Token;
    tokenAdmin = this.tokenService.obtenerTokenToken();
    if(tokenAdmin.idUsuario==4){
      this.esAdmin=true;
    }
    console.log(tokenAdmin.idUsuario);
  }

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
      this.estaLogueado = !name;
  }
  logout()
  {
    //this.dataService.deleteToken();
    window.location.href = "/pagina_principal";
    this.tokenService.quitarToken();
    //vaciar el carrito 
    this.productoService.limpiarCarrito();
  }
}

