import { HttpHeaders } from "@angular/common/http";
import { Usuario } from "../modelo/usuario";
//import { BehaviorSubject } from "rxjs";


export class TokenPasswordService {

    constructor() { }

    
//  private estaLogueado = new BehaviorSubject<boolean>(false);
//  estaLogueado$ = this.estaLogueado.asObservable();
  

  guardarToken(id:number, nombre:string, apellido:string, email:string, birthDate:Date, password:string, estado:number) {
    const item = JSON.stringify({ id, nombre, apellido, email, birthDate, password, estado});
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

  obtenerToken() :string {
    let respuesta = "";
    const item = localStorage.getItem('token');
    if (item) {
      //this.estaLogueado.next(true);
      //respuesta = JSON.parse(item);
      respuesta = item;
    }
    else {
      //this.estaLogueado.next(false);
    }

    return respuesta;
  }

  obtenerHeaders() :HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'aplication/json',
      'x-token': this.obtenerToken(),
      'Access-Control-Allow-Methods': '"POST, GET,DELETE,PUT"',
      'Access-Control-Allow-Origin': 'http://localhost',
    });
  }


}