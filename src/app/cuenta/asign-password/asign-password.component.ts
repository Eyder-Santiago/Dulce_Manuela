import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { RetrieveService } from 'src/app/servicios/retrieve.service';
import { TokenPasswordService } from 'src/app/servicios/tokenPassword.service';

@Component({
  selector: 'app-asign-password',
  templateUrl: './asign-password.component.html',
  styleUrls: ['./asign-password.component.css']
})
export class AsignPasswordComponent implements OnInit {


  public contrasena:string = '';
  public confirmarContrasena:string = '';
 // almacenarUsuarios : Usuario[] = [];
  @Output() idOfPassword = new EventEmitter<Usuario>();
 
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


  constructor(
    private router: Router,
    public servicioRetrieve : RetrieveService,
    private tokenPasswordService : TokenPasswordService
  ) { }

  ngOnInit(): void {
    console.log(this.idOfPassword);
  }

  newPassword(){
    if (this.contrasena == this.confirmarContrasena){
      //this.editPassword()
      this.usuario = this.tokenPasswordService.obtenerToken(); //obtiene los valores ingresados previamente al localstorage en retrieve.component.ts
      this.usuario.password =this.contrasena;
      console.log(this.usuario);
      this.editPassword();
    }
    else {
      alert("Las contraseñas no coinciden");
    }
    
  }

  procesarContrasena(){
    
  }

  editPassword(){
    this.servicioRetrieve.editPassword(this.usuario).subscribe(resp =>{
      alert("La contraseña se ha modificado satisfactoriamente");

      //una vez se envíe el objeto local se define en blanco
      //this.usuarioCambioContrasena.emit(this.usuario);
      this.usuario = new Usuario("","","","", new Date(),"","",1);
      this.tokenPasswordService.quitarToken();
      this.router.navigate(["cuenta/login"])
      //console.log(resp);
    }
    );
  }

}
