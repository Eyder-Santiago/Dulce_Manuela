import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  almacenar : string = "";
  @Output() idOfPassword = new EventEmitter<Usuario>();
 
  
  
  @Input() usuario:Usuario={
    id:0,
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    birthDate:new Date(),
    password:'',
    estado:1,
  }


  constructor(
    public servicioRetrieve : RetrieveService,
    private tokenPasswordService : TokenPasswordService
  ) { }

  ngOnInit(): void {
    console.log(this.idOfPassword);
  }

  newPassword(){

    
    let mensaje : string = "Las contraseñas no coinciden";

    if (this.contrasena == this.confirmarContrasena){
      mensaje = "La contraseña se ha modificado satisfactoriamente";

      //this.editPassword()
      this.almacenar = this.tokenPasswordService.obtenerToken();

      console.log(this.almacenar);

    }
    alert(mensaje);
  }

  procesarContrasena(){
    
  }

  editPassword(){

    
    

    this.servicioRetrieve.editPassword(this.usuario).subscribe(resp =>{


      //una vez se envíe el objeto local se define en blanco
      //this.usuarioCambioContrasena.emit(this.usuario);
      //this.usuario = new Usuario("","","","", new Date())
      //console.log(resp);
    }
    );
  }

}
