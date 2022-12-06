import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductoCarrito } from '../modelo/productoCarrito';
import { ProductoService } from '../servicios/producto.service';
import { Pedido } from '../modelo/pedido';
import { DetallePedido } from '../modelo/detallePedido';
import { Token } from '../modelo/token';
import { TokenService } from './token.service';
import { RespuestaPedido } from '../modelo/respuestaPedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private productoService: ProductoService,
  ) { }

  UrlBase:string = environment.UrlBackend;

  public generarPedido() : Pedido {
    let token:Token = JSON.parse(this.tokenService.obtenerToken());
    let carrito:ProductoCarrito[] = this.productoService.obtenerLocalStorageArray();
    let detalles:DetallePedido[] = [];
    let pedido = new Pedido(0, 0, 0, "", "", "nuevo", "", token.idUsuario, undefined, detalles);
    let precioTotal:number = 0;
    let cantidadProductos:number = 0;
    for (let item of carrito) {
      let subtotal:number = item.cantidad * item.producto.precio;
      cantidadProductos += item.cantidad;
      precioTotal += subtotal;
      let detalle:DetallePedido = new DetallePedido(0, 0, item.producto.id, undefined, item.cantidad, item.producto.precio, subtotal);
      detalles.push(detalle);
    }

    pedido.precioTotal = precioTotal;
    pedido.cantidadProductos = cantidadProductos;

    pedido.detalles = detalles;

    return pedido;
  }

  public getPedidos(){
    let  url = this.UrlBase + '/pedidos';
    return this.http.get<Pedido[]>(url,{headers:this.tokenService.obtenerHeaders()});
  }

  public crearPedido(pedido:Pedido) {
    let  url = this.UrlBase + '/pedidos';
    return this.http.post<RespuestaPedido>(url,JSON.stringify(pedido), { headers: this.tokenService.obtenerHeaders() });
  }
}
