import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
//public productos:Producto[]=[];
  
  public productos:Array<Producto>=[];
  public productoSeleccionado:Array<Producto>=[]
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    
  ) { }
  
  public agregar(p:Producto){
    this.productos.push(p);
  }
  
  UrlBase:string = environment.UrlBackend;
  
  public getProductos(){
     //defino la url donde esta el servicio
    let  url = this.UrlBase + '/ProductoService.php';
    return this.http.get<Producto[]>(url,{headers:this.tokenService.obtenerHeaders()});
  }
  
  public crearProducto(producto:Producto){
    //defino la url donde esta el servicio
    let  url = this.UrlBase + '/ProductoService.php';
    return this.http.post(url,JSON.stringify(producto),{headers:this.tokenService.obtenerHeaders()});
  }
  
  public editarProducto(producto:Producto){
    //defino la url donde esta el servicio
    let  url = this.UrlBase + '/ProductoService.php'; 
    return this.http.put(url,JSON.stringify(producto),{headers:this.tokenService.obtenerHeaders()});
  }
  
  eliminarProducto(producto:Producto){
    //defino la url donde esta el servicio
    let  url = this.UrlBase + '/ProductoService.php?id='+ producto.id;
    return this.http.delete(url,{headers:this.tokenService.obtenerHeaders()});
  }

  guardarAlLocalStorage(producto:Producto){
    const item = JSON.stringify(producto);
    localStorage.setItem('producto', item);
  }
/*
  obtenerLocalStorage() :string {
    let respuesta = "";
    const item = localStorage.getItem('producto');

    if (item) {
      //this.estaLogueado.next(true);
      //respuesta = JSON.parse(item);
      respuesta = item;
    }
    else {
      //this.estaLogueado.next(false);
    }

    return respuesta;
  }


}
*/

obtenerLocalStorage() :Producto {
  let respuesta = new Producto("",0,0,"","",0);
  const item = localStorage.getItem('producto');
  if (item) {
    //this.estaLogueado.next(true);
    respuesta = JSON.parse(item);
    //respuesta = item;
  }
  else {
    //this.estaLogueado.next(false);
  }

  return respuesta;
}
}
/*
productoSeleccionadoCliente(producto:Producto){

 // console.log(producto);



  this.productoSeleccionado.push(producto);
}

productoDevuelto(){
  return this.productoSeleccionado.pop();
}

}
*/




/*
import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
public productos:Producto[]=[];

  constructor(private http: HttpClient) { }
  

  public agregar(p:Producto){
    let  url ='http://localhost/tiendaservice/ProductoService.php';
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');

    return this.http.get<Producto[]>(url,{headers:header});
  }

  public getProductos(){
    return this.productos;
  }
  /*
  public getProductos(){
    //defino la url donde esta el servicio
    let  url ='http://localhost/tiendaservice/ProductoService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Origin','http://localhost');

       return this.http.get<Producto[]>(url,{headers:header});
 }


 public crearProducto(producto:Producto){

  //defino la url donde esta el servicio
  let  url ='http://localhost/tiendaservice/ProductoService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
     header.append('Access-Control-Allow-Origin','http://localhost');
     return this.http.post(url,JSON.stringify(producto),{headers:header});
}

public editarProducto(producto:Producto){

  //defino la url donde esta el servicio
  let  url ='http://localhost/tiendaservice/ProductoService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
     header.append('Access-Control-Allow-Origin','http://localhost');
     return this.http.put(url,JSON.stringify(producto),{headers:header});
}


}
 */