import { Injectable } from '@angular/core';
import { Usuario } from "../modelo/usuario";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { RespuestaToken } from '../modelo/respuestaToken';

@Injectable({
    providedIn: 'root'
})

export class LoginService{

    constructor(private http: HttpClient) { }

    UrlBase:string = environment.UrlBackend;

    public login(usuario:Usuario){
        //defino la url donde esta el servicio
        let  url = this.UrlBase + '/CuentaService.php';
        let header=new HttpHeaders();
        header.append('Content-Type','aplication/json')
        header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
        header.append('Access-Control-Allow-Origin','http://localhost:8080');
        return this.http.post<RespuestaToken>(url,JSON.stringify(usuario),{headers:header});
    }
}
