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

  ngOnInit(): void {
    this.tokenService.estaLogueado$.subscribe(valor => this.estaLogueado = valor);
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

