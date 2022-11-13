import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  link:string = 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/D65K3MSUSJHB3AX5DTTVHK5X5E.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
