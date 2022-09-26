import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dulce_Manuela';
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyCDqppaopyWyql9I14RG3OG2T0oiVDY9Zc",
    authDomain: "dulce-manuela.firebaseapp.com",
   })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
