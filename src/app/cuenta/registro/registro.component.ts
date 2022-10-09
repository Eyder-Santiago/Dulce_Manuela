import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
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

  usuario:Usuario = new Usuario("","","","", new Date(),"",1);

  constructor(
    private servicioUsuario:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  //se define la función registro que será llamada cuando se de clic en agregar
  agregarUsuario() : void{
    this.servicioUsuario.crearUsuario(this.usuario).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.usuarioCreado.emit(this.usuario);  //emite el objeto Usuario que se haya creado en registro
      this.usuario = new Usuario("","","","", new Date(),"",1)
      this.router.navigate([""]);
    }
    );
  }
}
