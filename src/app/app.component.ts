import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dulce_Manuela';

  constructor(
    private tokenService: TokenService
  ){

  }

  ngOnInit(): void {
    this.tokenService.obtenerToken();
  }
}