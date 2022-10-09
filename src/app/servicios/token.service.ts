import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  guardarToken(valor:string, idUsuario:number) {
    const item = JSON.stringify({ valor, idUsuario });
    localStorage.setItem('token', item);
  }

  quitarToken() {
    localStorage.removeItem('token');
  }

  obtenerToken() :string {
    let respuesta = "";
    const item = localStorage.getItem('token');
    if (item) {
      //respuesta = JSON.parse(item);
      respuesta = item;
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
