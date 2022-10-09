import { Component, OnInit } from '@angular/core';

import { FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { ApiService } from '../serviciologin';
import { HttpClient } from '@angular/common/http';


declare var ventana4:any;//para utilizar las funciones de javascript

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
