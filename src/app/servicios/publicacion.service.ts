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
        
    }

}