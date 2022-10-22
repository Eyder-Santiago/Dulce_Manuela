import { Injectable } from '@angular/core';
import { Usuario } from "../modelo/usuario";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
  })

export class UsuarioService{

    public usuarios:Array<Usuario> = [];

    constructor(
      private http: HttpClient,
      private tokenService: TokenService
    ) { }

    UrlBase:string = environment.UrlBackend;

    public agregar(usuario : Usuario){
        this.usuarios.push(usuario); //agregando el usuario al arreglo
    }

    public getUsuarios(){
        //defino la url donde esta el servicio
       let  url =this.UrlBase + '/UsuarioService.php';
       return this.http.get<Usuario[]>(url,{headers:this.tokenService.obtenerHeaders()});
    }

    public crearUsuario(usuario:Usuario){

        //defino la url donde esta el servicio
        let  url = this.UrlBase + '/UsuarioService.php';
        return this.http.post(url,JSON.stringify(usuario),{headers:this.tokenService.obtenerHeaders()});
      }

    public editarUsuario(usuario:Usuario){

        //defino la url donde esta el servicio
        let  url = this.UrlBase + '/UsuarioService.php';
        return this.http.put(url,JSON.stringify(usuario),{headers:this.tokenService.obtenerHeaders()});
      }

    eliminarUsuario(usuario:Usuario){
        //defino la url donde esta el servicio
        let  url = this.UrlBase + '/UsuarioService.php?id='+ usuario.id;
        return this.http.delete(url,{headers:this.tokenService.obtenerHeaders()});
      }






}
