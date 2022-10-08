import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
//public productos:Producto[]=[];

public productos:Array<Producto>=[];

constructor(private http: HttpClient) { }

public agregar(p:Producto){
  this.productos.push(p);
}

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

eliminarProducto(producto:Producto){
  //defino la url donde esta el servicio
  let  url ='http://localhost/tiendaservice/ProductoService.php?id='+ producto.id;
  let header=new HttpHeaders();
  header.append('Content-Type','aplication/json')
  header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
  header.append('Access-Control-Allow-Origin','http://localhost');

  return this.http.delete(url,{headers:header});
}


}






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