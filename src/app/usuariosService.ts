import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./loggingService.service";
import { Usuario } from "./usuario.model";


@Injectable()
export class UsuariosService{
        
    usuarios : Usuario[] = [];

    //actualiza el arreglo una vez sea recuperado de la base de datos
    setUsuarios(usuarios:Usuario[]){
        this.usuarios = usuarios;
    }
    saludar = new EventEmitter<number>(); //Emitiendo la variable Saludar
    constructor(private loggingService: LoggingService, private dataServices: DataServices){ //inyectamos servicio DataServices
  
    }
    obtenerUsuarios(){
        return this.dataServices.cargarUsuarios(); //regresa un observable, por tal hay que subscribirse, se hará en usuarios.component.ts
    }

    agregarUsuario(usuario: Usuario){ 
        this.loggingService.enviaMensajeAConsola("agregamos al arreglo el nuevo usuario" + usuario.nombre);
        if(this.usuarios == null){
          this.usuarios = [];
        }
        this.usuarios.push(usuario);
        this.dataServices.guardarUsuarios(this.usuarios); //guardar el arreglo en dataServices
    }

    encontrarUsuario(index : number){ //declaramos una variable, y con ayuda cdel arreglo usuarios, proporcionamos el indice que estamos recibiendo y nos va a regresar el objeto usuario que se encuentra agregado en este índice y regresamos el objeto usuario que hemos encontrado con el return
        let usuario: Usuario = this.usuarios[index];
        return usuario;
      }
  
      modificarUsuario(index : number, usuario:Usuario){
        let usuario1 = this.usuarios[index]; //regresando el objeto usuario que se encuentra en el índice especificadp
        usuario1.nombre = usuario.nombre;
        usuario1.apellido = usuario.apellido;
        this.dataServices.modificarUsuario(index, usuario);
      }
  
      eliminarUsuario(index : number){
        this.usuarios.splice(index,1); //especificamos que se va a eliminar 1 elemento del arreglo
        this.dataServices.eliminarUsuario(index); //eliminar el registro de la base de datos
        //se vuelve a guardar el arreglo en la base de datos para que se regeneren los índices
        this.modificarUsuarios();
      }
  
      modificarUsuarios(){
        if(this.usuarios != null){
          this.dataServices.guardarUsuarios(this.usuarios);
        }
      }
  


}