import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(public servicioUsuario:UsuarioService) { }

  @Output() usuarioEliminado = new EventEmitter<Usuario>();

  @Input() usuario:Usuario={
    id:0,
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    birthDate:new Date(),
    password:"",
    estado:0,
  }

  

  ngOnInit(): void {
  }

  eliminar(){
    if(confirm('¿Estás seguro que quieres eliminar este usuario?')){
      this.servicioUsuario.eliminarUsuario(this.usuario).subscribe(resp=>{
        console.log(resp);
        this.usuarioEliminado.emit(this.usuario);
        alert('El usuario ha sido eliminado exitosamente');
       },
       err => {
        alert("No se pudo eliminar el usuario: " + err.error);
      }); 
    }
  }


}
