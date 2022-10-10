import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from 'src/app/modelo/usuario';
import { LoginService } from '../../servicios/login.service'
import { TokenService } from '../../servicios/token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  @Output() usuarioLogueado = new EventEmitter<Usuario>();

  usuario:Usuario = new Usuario("","","","", new Date(),"",1);

  ngOnInit(): void {
  }

  hacerLogin() {
    this.loginService.login(this.usuario).subscribe(respuesta => {
      if (respuesta.respuesta.valida == 'S') {
        this.tokenService.guardarToken(respuesta.respuesta.token, respuesta.respuesta.id_usuario);
        this.router.navigate([""]);
      }
      else {
        alert("No se pudo iniciar sesión");
      }
    });
  }

}
