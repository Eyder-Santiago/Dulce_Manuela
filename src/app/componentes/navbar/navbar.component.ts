import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private tokenService: TokenService
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
  }
}
