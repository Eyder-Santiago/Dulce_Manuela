import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dulce_Manuela';

  constructor(){

  }

  ngOnInit(): void {
    
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