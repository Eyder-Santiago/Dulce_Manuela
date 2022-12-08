import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { Publicacion } from 'src/app/modelo/publicacion';
import { ProductoService } from 'src/app/servicios/producto.service';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  public saveProductos: Producto[] = [];
  public guardaProductos: Producto = new Producto();

  @Output() publicacionCreada = new EventEmitter<Publicacion>;

  public probandoSelect: string[] = ['alga','árbol','planta'];
 
  constructor(
    public servicioProducto : ProductoService,
    public servicioPublicacion : PublicacionService
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

  public productoSelectedUno:Producto;
  public productoSelectedDos:Producto;

  @Input() publicacion:Publicacion = new Publicacion('',0,'',1,this.productoGuardar);
  //publicacion:Publicacion = new Publicacion('',0,'',1,this.productoGuardar);

  public contadorLike:number=0;
  public comentario:string='';
  public productoNinguno:Producto = new Producto(999, 'Ninguno')  

 // producto: Producto = new Producto()



  ngOnInit(): void {
    //this.getDataProduct();
    this.cargarProductos();
    console.log(this.productoSelectedUno);
  }


  sumarLike(){
    this.contadorLike++;
  }


  cargarProductos(){
    this.servicioProducto.getProductos().subscribe((res: Producto[]) => {
      this.productoGuardar = res;
      //this.productoGuardar.push(this.productoNinguno);
    });
  }

  agregarPublicacion(){
    this.servicioPublicacion.crearPublicacion(this.publicacion).subscribe(resp=> {
      this.publicacionCreada.emit();
      this.publicacion = new Publicacion('',0,'',0,this.productoGuardar);
    },
    err => {
      alert("No se pudo crear la publicacion: " + err.error);
    }
    );
  }
}
