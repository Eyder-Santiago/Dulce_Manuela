import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  @Output() usuarioCreado = new EventEmitter<Usuario>();

  @Output() usuarioEditado = new EventEmitter<Usuario>();

  @Input() usuario:Usuario = new Usuario("","","","", new Date(),"","",1);


  constructor(public servicioUsuario:UsuarioService) { }

  ngOnInit(): void {

  }
 
  //se define la función registro que será llamada cuando se de clic en agregar
  agregarUsuario() : void{
    this.servicioUsuario.crearUsuario(this.usuario).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.usuarioCreado.emit(this.usuario);  //emite el objeto Usuario que se haya creado en registro
      this.usuario = new Usuario("","","","", new Date(),'',"",1)
    }
    );
  }

  modificarUsuario() : void{
    this.servicioUsuario.editarUsuario(this.usuario).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.usuarioEditado.emit(this.usuario);
      //this.usuario = new Usuario("","","","", new Date())
    }
    );
  }

}
