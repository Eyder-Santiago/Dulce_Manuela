import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Usuario } from './usuario.model';

@Injectable()//se usa porque se va a inyectar un servicio dentro de este servicio
export class DataServices{

    constructor(private httpClient:HttpClient, private loginService : LoginService){}

    cargarUsuarios(){
        const token = this.loginService.getIdToken(); //el token que nos regresó la autenticación
        //se encarga de regresar el arreglo de datos almacenado en la base de datos
        return this.httpClient.get<Usuario[]>('https://dulce-manuela-default-rtdb.firebaseio.com/datos.json?auth=' + token); //regresa un objeto de tipo observable, por tal hay que usar subscribe al método para recuperar la infirmación
    }


    //guardamos el arreglo de usuarios
    guardarUsuarios(usuarios: Usuario[]){
        const token = this.loginService.getIdToken(); //el token que nos regresó la autenticación
        //tomamos la ruta de al base de datos firebase ||| todas las url deben terminar en '.json', post agrega nuevas peticiones, put modifica la petición existente
        //this.httpClient.post('https://dulce-manuela-default-rtdb.firebaseio.com/datos.json', personas)
        this.httpClient.put('https://dulce-manuela-default-rtdb.firebaseio.com/datos.json?auth=' + token, usuarios)
        .subscribe(
            response => console.log("resultado guardar Usuarios" + response),
            error => console.log("Error al guardar Usuarios" + error)
        );
    }

    modificarUsuario(index:number, usuario : Usuario){ //para agregaar un índice cuando se vaya a hacer una modificación
        const token = this.loginService.getIdToken(); //el token que nos regresó la autenticación
        let url:string;
        url = 'https://dulce-manuela-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth=' + token;
        this.httpClient.put(url, usuario)
        .subscribe(
            response => console.log("resultado modificar Usuario:" + response)
        ,   error => console.log("Error en modificar Usuario:" + error)
        
        )
    }

    eliminarUsuario(index:number){
        const token = this.loginService.getIdToken(); //el token que nos regresó la autenticación
        let url:string;
        url = 'https://dulce-manuela-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth=' + token;
        this.httpClient.delete(url) //solo nos posicionamos en la url, no hay necesidad de pasar objeto
        .subscribe(
            response => console.log("resultado eliminar Usuario" + response)
        ,   error => console.log("Error en eliminar Usuario:" + error)
        
        )
    }


}