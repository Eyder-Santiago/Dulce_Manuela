import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../modelo/usuario";
//import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TokenPasswordService {

    constructor() { }

    
//  private estaLogueado = new BehaviorSubject<boolean>(false);
//  estaLogueado$ = this.estaLogueado.asObservable();
  

  guardarToken(usuario:Usuario) {
    const item = JSON.stringify(usuario);
    localStorage.setItem('token', item);
    //this.estaLogueado.next(true);
  }

/*
  guardarToken(usuario : Usuario) {
    const item = JSON.stringify(usuario);
    localStorage.setItem('token', item);
    //this.estaLogueado.next(true);
  }
*/


  quitarToken() {
    localStorage.removeItem('token');
    //this.estaLogueado.next(false);
  }

  obtenerToken() :Usuario {
    let respuesta = new Usuario("","","","", new Date(),"",1);
    const item = localStorage.getItem('token');
    if (item) {
      //this.estaLogueado.next(true);
      respuesta = JSON.parse(item);
      //respuesta = item;
    }
    else {
      //this.estaLogueado.next(false);
    }

    return respuesta;
  }
}