import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMess}
import { FlashMessagesService } from 'angular2-flash-messages';
import { Usuario } from '../../modelo/usuario.model';
import { UsuariosService } from '../../servicios/usuariosService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario ={
    nombre: '',
    apellido: '',
    email: '',
  }

  @ViewChild("usuarioForm") usuarioForm: NgForm;

  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  /*
  usuarios: Usuario[] = [
    new Usuario('Margarita', 'ríos'),
    new Usuario('Lisa', 'González')
  ];
  */

  //servicio LoggingServices
  constructor(
    private usuariosServices: UsuariosService,
    private flashMessages: FlashMessagesService  
  ){}

  ngOnInit(): void { 
    this.usuariosServices.obtenerUsuarios()
    .subscribe(
     usuarios => {
       this.usuarios = usuarios;
      // this.usuariosServices.setUsuarios(usuarios);
     }
    );
  }
   agregar({value : valid} : {value:Usuario, valid : boolean}){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    }
    else{
      //Agregar el nuevo usuario
      this.usuariosServices.agregarUsuario(value);
      this.usuarioForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }



}
