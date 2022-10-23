import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';
import { RetrieveService } from 'src/app/servicios/retrieve.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css']
})
export class RetrievePasswordComponent implements OnInit {

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

//  public form: FormGroup;

  public correoInput:string = '';

  almacenarUsuarios : Usuario[] = [];

  constructor(
    public servicioRetrieve : RetrieveService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  retrievePassword(){
    this.servicioRetrieve.existEmail().subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      //this.usuarioCambioContrasena.emit(this.usuario);
      //this.usuario = new Usuario("","","","", new Date())
      //console.log(resp);
      this.getCorreo(resp);
    }
    );
  }

  
  getCorreo(usuarios2:Usuario[]){
    //if (this.contrasena == this.usuario.email)
    //console.log(this.contrasena);

    this.almacenarUsuarios = usuarios2;

    //emito almacenar 

    let mensaje : string = "El correo no existe";

    //asigno a la variable p los objetos que se obtienen de la base datos
    //comparo lo escrito con los objetos que obtenga en la base de datos
    for(let p of usuarios2){
        p.email;
        p.id;
        

        //redirige a cuenta/asign-password si el correo ingresado si exista en la base de datos
        if(p.email == this.correoInput){
          mensaje = "El correo existe con id =" + p.id;

          this.router.navigate(["cuenta/asign-password"]); //envío el objeto que coincida con el correo existe con la ruta
          this.idOfPassword.emit(p);
          
          

        }else{
  
        }
        
    }

    alert(mensaje);

    
    
    

    //console.log(usuarios2);
    //console.log(this.almacenarUsuarios);
  }

  /*
  recuperarContrasena(){
    if (this.contrasena == this.confirmarContrasena){
      this.usuario.password = this.confirmarContrasena;
    }else{
      alert("Las contraseñas no coinciden");
    }
  }

  */
}
