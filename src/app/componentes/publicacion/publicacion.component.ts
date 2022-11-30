import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { Publicacion } from 'src/app/modelo/publicacion';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  public saveProductos: Producto[] = [];
  public guardaProductos: Producto = new Producto("",0,0,"","",0);

  public probandoSelect: string[] = ['alga','árbol','planta'];
  

  @Input() publicacion:Publicacion = new Publicacion('',0,'',1,this.saveProductos);
  //@Input() producto:Producto = new Producto('',0,0,'',0);

  public contadorLike:number=0;
  public comentario:string='';
  

 // producto: Producto = new Producto()

  constructor(
    public servicioProducto : ProductoService
  ) { }

  ngOnInit(): void {
    //this.getDataProduct();
  }

  sumarLike(){
    this.contadorLike++;
  }

  /*
  getDataProduct(){
    this.servicioProducto.getProductos().subscribe((resp:Producto[])=>
      {
        console.log(resp);
        this.almacenarProductos(resp);
        this.saveProductos = resp;
      });
      
  }

  almacenarProductos(productoGet:Producto[]){
    // //console.log(producto);
    // for(let p of productoGet){
    //   this.publicacion.producto.id = p.id;
    //   this.publicacion.producto.nombre = p.nombre;
    //   this.publicacion.producto.precio = p.precio;
    //   this.publicacion.producto.urlImagen = p.urlImagen;
    //   this.publicacion.producto.estado = p.estado;
    // }

    // console.log(this.publicacion.producto.nombre);
    
  }
*/
}
