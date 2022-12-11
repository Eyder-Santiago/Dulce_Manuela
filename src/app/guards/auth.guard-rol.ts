import { Token } from 'src/app/modelo/token';
import { Injectable, Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import { RetrieveService } from '../servicios/retrieve.service';
import { TokenService } from '../servicios/token.service';
import { TokenPasswordService } from '../servicios/tokenPassword.service';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRol implements CanActivate {
  constructor(
    private tokenPasswordService: TokenPasswordService,
    private router: Router,
    public servicioUsuario : UsuarioService,
    private retrieveService:RetrieveService,
    private tokenUsar : TokenService //obtiene el token en string
    //private token : TokenPasswordService
  ) {

  }

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




  ngOnInit(): void {
    this.editarCuenta();
  }



  //traer el usuario logeado del localstorage token
  editarCuenta(){
   let almacenar : string = "";
   almacenar = this.tokenUsar.obtenerToken();
   //almacenar = almacenar.replace("idUsuario", "id_usuario");
   let token:Token = JSON.parse(almacenar);
   
   let idUsuarioFind:number = token.idUsuario;
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

      this.usuario = usuarioGet.find(usuario => usuario.id === idLocalStorage) ?? new Usuario("","","","", new Date(),"","",1);
      

    }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        //this.usuario = usuarioGet.find(usuario => usuario.id === idLocalStorage) ?? new Usuario("","","","", new Date(),"","",1);
        //console.log(this.tokenPasswordService.obtenerToken().id );
        let almacena:string = this.tokenUsar.obtenerToken();
        //almacena = this.invertir(almacena);
        let tokenConvertido:Token = JSON.parse(almacena);
        console.log(tokenConvertido.idUsuario);
      if (tokenConvertido.idUsuario !=4) {
        this.router.navigate(["cuenta/login"]);
        return false;
      }
      return true;
  }
  
}
