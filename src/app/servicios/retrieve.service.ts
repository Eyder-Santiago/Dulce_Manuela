import { Injectable } from '@angular/core';
import { Usuario } from "../modelo/usuario";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { TokenService } from './token.service';


@Injectable({
    providedIn: 'root'
  })

export class RetrieveService {


    public usuarios:Array<Usuario> = [];

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }


    UrlBase:string = environment.UrlBackend;

    public existEmail(){
        //defino la url donde esta el servicio
        let header=new HttpHeaders();
        let  url =this.UrlBase + '/UsuarioService.php';
        return this.http.get<Usuario[]>(url,{headers:header});
    }

    public editPassword(usuario:Usuario){
        let header=new HttpHeaders();
        let  url =this.UrlBase + '/RetrievePasswordService.php'; //no afectó llamarlo retrieve
        return this.http.put(url,JSON.stringify(usuario),{headers:header});
    }
        
    

}