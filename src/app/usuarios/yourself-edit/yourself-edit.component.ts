import { Token } from 'src/app/modelo/token';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { TokenPasswordService } from 'src/app/servicios/tokenPassword.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-yourself-edit',
  templateUrl: './yourself-edit.component.html',
  styleUrls: ['./yourself-edit.component.css']
})
export class YourselfEditComponent implements OnInit {

  @Output() usuarioAutoEditado = new EventEmitter<Usuario>();

  @Input() usuarios : Usuario[] = [];

  //@Input() usuario:Usuario = new Usuario("","","","", new Date(),"","",1);
  
  @Input() usuario:Usuario={
    id:0,
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    birthDate:new Date(),
    numCelular:'',
    password:'',
    estado:1,
  }


  //@Input() tokenId:Token = new Token(0,"","");


  public idInput:number=0;

  

  constructor(
    public servicioUsuario : UsuarioService,
    private router: Router,
    private tokenUsar : TokenService
    //private token : TokenPasswordService
  ) { }



  ngOnInit(): void {
    this.editarCuenta();
  }



  //traer el usuario logeado del localstorage token
  editarCuenta(){
   let almacenar : string = ""; 
   almacenar = this.tokenUsar.obtenerToken();

   almacenar = this.invertir(almacenar);

   let nuevaCadena : string = "";

   nuevaCadena = almacenar.slice(2,5);

   let idUsuarioFind : number = 0;

   

   //iterando la cadena para coger el id de usuario
   for (let u of nuevaCadena){
    if(u == '1'|| u == '2'|| u =='3'|| u=='4'|| u=='5'|| u=='6'|| u=='7'|| u=='8'|| u=='9'|| u=='0'){
      idUsuarioFind = parseInt(u);
      
    }
   }

   //console.log(idUsuarioFind);

   this.getDataUser(idUsuarioFind);
   return idUsuarioFind;

   /*for (let u of almacenar){
    console.log(u);
   }
*/
  }

   invertir(cadena:string) {
    var x = cadena.length; //número de veces que itera
    var cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

    //trae todos los usuarios
    getDataUser(idLocalStorage:number){
      this.servicioUsuario.getUsuarios().subscribe(resp =>{
        this.auxiliarDataUser(resp,idLocalStorage);
      }
      );
    }
  
    auxiliarDataUser(usuarioGet:Usuario[], idLocalStorage:number){
      
      //me traigo todos los usuarios del arreglo
      for (let p of usuarioGet){
        if(p.id == idLocalStorage)
        {
          console.log(p.id);
          //asignar valores
          this.usuario.id = p.id;
          this.usuario.nombre = p.nombre;
          this.usuario.apellido = p.apellido;
          this.usuario.email = p.email;
          this.usuario.direccion = p.direccion;
          this.usuario.birthDate = p.birthDate;
          this.usuario.numCelular = p.numCelular;
          this.usuario.password = p.password;
          this.usuario.estado = p.estado;
          this.usuarios.push(this.usuario);
        }
      }
  
      
  
    }
  
}
