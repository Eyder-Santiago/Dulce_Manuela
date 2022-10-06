import { Injectable } from '@angular/core';
import { Usuario } from "../modelo/usuario";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UsuarioService{

    public usuarios:Array<Usuario> = [];

    constructor(private http: HttpClient) { }

    public agregar(usuario : Usuario){
        this.usuarios.push(usuario); //agregando el usuario al arreglo
    }

    public getUsuarios(){
        //defino la url donde esta el servicio
       let  url ='http://localhost/dulceservice/UsuarioService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Origin','http://localhost');
    
       return this.http.get<Usuario[]>(url,{headers:header});
    }

    public crearUsuario(usuario:Usuario){

        //defino la url donde esta el servicio
        let  url ='http://localhost/dulceservice/UsuarioService.php';
           let header=new HttpHeaders();
           header.append('Content-Type','aplication/json')
           header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
           header.append('Access-Control-Allow-Origin','http://localhost');
           return this.http.post(url,JSON.stringify(usuario),{headers:header});
      }

    public editarUsuario(usuario:Usuario){

        //defino la url donde esta el servicio
        let  url ='http://localhost/dulceservice/UsuarioService.php';
           let header=new HttpHeaders();
           header.append('Content-Type','aplication/json')
           header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
           header.append('Access-Control-Allow-Origin','http://localhost');
           return this.http.put(url,JSON.stringify(usuario),{headers:header});
      }

    eliminarUsuario(usuario:Usuario){
        //defino la url donde esta el servicio
        let  url ='http://localhost/dulceservice/UsuarioService.php?id='+ usuario.id;
        let header=new HttpHeaders();
        header.append('Content-Type','aplication/json')
        header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
        header.append('Access-Control-Allow-Origin','http://localhost');
      
        return this.http.delete(url,{headers:header});
      }
      
      




}