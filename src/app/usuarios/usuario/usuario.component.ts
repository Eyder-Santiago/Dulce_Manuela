import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario.model';
import { UsuariosService } from 'src/app/usuariosService';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario; //pasando información de componente padre a componente hijo
  @Input() indice: number;   //pasando información de componente padre a componente hijo
  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }
  emitirSaludo(){
    this.usuariosService.saludar.emit(this.indice);
  }

}
