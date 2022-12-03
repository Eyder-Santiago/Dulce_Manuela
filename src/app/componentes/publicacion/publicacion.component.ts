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
 
  constructor(
    public servicioProducto : ProductoService
  ) { }
 /* 
  publicacionCrear :  Publicacion = {
    idPublicacion:0,
    descripcion:'',
    likeP:0,
    comentario:'',
    estado:1,
    producto: new Producto("", 0, 0, "", "", 0)};
    */
  //@Input() publicacion:Publicacion = new Publicacion('',0,'',1,this.saveProductos);
  //@Input() producto:Producto = new Producto('',0,0,'',0);

  productoGuardar:Producto[] = [];

  publicacion:Publicacion = new Publicacion('',0,'',1,new Producto("", 0, 0, "", "", 0));
  //publicacion:Publicacion = new Publicacion('',0,'',1,this.productoGuardar);

  public contadorLike:number=0;
  public comentario:string='';
  

 // producto: Producto = new Producto()



  ngOnInit(): void {
    //this.getDataProduct();
    this.cargarProductos();
  }

  sumarLike(){
    this.contadorLike++;
  }

  cargarProductos(){
    this.servicioProducto.getProductos().subscribe((res: Producto[]) => {
      this.productoGuardar = res;
    });
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
