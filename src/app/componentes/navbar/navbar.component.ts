import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  estaLogueado:boolean;

  ngOnInit(): void {
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
  }
}
