import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  mostrarFormulario : boolean = false; //muestra u oculta el form

  //@Input() and @Output() allow Angular to share data between the parent context and child directives or components. 
  //An @Input() property is writable while an @Output() property is observable.
  @Output() usuarioEditado = new EventEmitter<Usuario>();

  @Input() usuario:Usuario={
    id:0,
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    birthDate:new Date(),
    password:'',
    estado:0,
  }

  constructor() { }


  modificarUsuario() : void{
    this.mostrarFormulario = true;
  }

  cerrarFormulario(){
    this.mostrarFormulario = false;
  }

  notificarActualizacion(){
    this.cerrarFormulario();
    this.usuarioEditado.emit(this.usuario);
  }



  ngOnInit(): void {

  }

}
