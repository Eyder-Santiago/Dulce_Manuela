import { Injectable } from '@angular/core';
import { Publicacion } from "../modelo/publicacion";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { RespuestaToken } from '../modelo/respuestaToken';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})

export class PublicacionService{

    public publicaciones:Array<Publicacion>=[];

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
    ) { }
      
    public agregar(p:Publicacion){
        this.publicaciones.push(p);
    }

    UrlBase:string = environment.UrlBackend;

    public getPublicacion(){
        let  url = this.UrlBase + '/PublicacionService.php';
        return this.http.get<Publicacion[]>(url,{headers:this.tokenService.obtenerHeaders()});
    }

    public crearPublicacion(publicacion:Publicacion){
        let  url = this.UrlBase + '/PublicacionService.php';
        return this.http.post(url,JSON.stringify(publicacion),{headers:this.tokenService.obtenerHeaders()});
    }

    public editarPublicacion(publicacion:Publicacion){
        let  url = this.UrlBase + '/PublicacionService.php';
        return this.http.put(url,JSON.stringify(publicacion),{headers:this.tokenService.obtenerHeaders()});
    }

    public eliminarPublicacion(publicacion:Publicacion){
        let  url = this.UrlBase + '/PublicacionService.php?idPublicacion='+ publicacion.idPublicacion;
        return this.http.delete(url,{headers:this.tokenService.obtenerHeaders()});
    }

}