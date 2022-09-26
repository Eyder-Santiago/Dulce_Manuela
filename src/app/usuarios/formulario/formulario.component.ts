import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from 'src/app/loggingService.service';
import { Usuario } from 'src/app/usuario.model';
import { UsuariosService } from 'src/app/usuariosService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  nombreInput:string = ''; //se habilita en clase 48 para usar two way bidding 
  apellidoInput:string = '';
  index:number;
  modoEdicion:number; //para query params
  /*
  @ViewChild('nombreInput') nombreInput: ElementRef;  //se importa este decorador, se pone como parámetro el nombre de la referencia nombreInput y se le asigna a una variable tipo ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef; 
*/
  constructor(private loggingService:LoggingService, private usuarioService : UsuariosService,
    private router:Router, private route:ActivatedRoute){ //los servicios se inyectan al constructor usando Dependency Injection, clase 45 se importa el servicio de Usuarios
    this.usuarioService.saludar.subscribe((indice: number) => alert("El indice es: " + indice)); //subscribiéndose al evento que se está emitiendo saludar es emiter
  } 

  ngOnInit(): void {
     //recuperar índice seleccionado
     this.index = this.route.snapshot.params['id']; //el nombre de id es el mismo de app-routing, ya que se está recuperando esa información 
     this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //en typeScript al poner '+', combierte a tipo number
     if (this.modoEdicion != null && this.modoEdicion === 1){ // con esto no es necesario preguntar por index sino ppreguntar por modo edición
      let usuario : Usuario = this.usuarioService.encontrarUsuario(this.index);
      this.nombreInput = usuario.nombre;
      this.apellidoInput = usuario.apellido;
     }
  }

  onGuardarUsuario(){ //Clase 43, se eliminan los dos parámetros, clase 66, al editar no duplica
    let usuario1 = new Usuario(this.nombreInput, this.apellidoInput); 
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.usuarioService.modificarUsuario(this.index, usuario1);
    }else{
      this.usuarioService.agregarUsuario(usuario1);//pasamos el objeto de tipo Usuario
    }
   // this.loggingService.enviaMensajeAConsola("Enviamos Usuario con nombre:" + Usuario1.nombre +" apellido:" + Usuario1.apellido);
    //this.UsuarioCreada.emit(Usuario1);  //clase 45, ya no se necesita emitir porque se está trabajando directamente desde un servicio, se harán en su lugar las líneas inferiores
    //clase 64 rutas, al dar clic y que a la vez se ejecuta este método onGuardarUsuario, nos redirigirá a la ruta Usuarios
    this.router.navigate(['usuario']);
  }

  eliminarUsuario(){
    if (this.index != null){
      this.usuarioService.eliminarUsuario(this.index);
    }
    //después de eliminar, nos redirige al listado de usuarios haciendo esto
    this.router.navigate(['usuarios']);
  }

}
