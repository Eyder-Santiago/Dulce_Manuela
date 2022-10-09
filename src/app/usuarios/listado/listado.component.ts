import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  indice : number = 0;

  

  @Output() usuarioEliminado = new EventEmitter<Usuario>();
  @Output() usuarioEditado = new EventEmitter<Usuario>();

  @Input() usuarios : Usuario[] = [];

 


  constructor(private servicioUsuario : UsuarioService) { }

  onUsuarioEliminado(usuario:Usuario){
    this.usuarioEliminado.emit(usuario);
  }

  onUsuarioEditado(usuario:Usuario){
    this.usuarioEditado.emit(usuario);
  }

  

  ngOnInit(): void {
    
  }

}
