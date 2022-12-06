import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pedido } from '../modelo/pedido';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  UrlBase:string = environment.UrlBackend;

  public getPedidos(){
    let  url = this.UrlBase + '/pedidos';
    return this.http.get<Pedido[]>(url,{headers:this.tokenService.obtenerHeaders()});
  }

  public crearPedido(pedido:Pedido) {
    let  url = this.UrlBase + '/pedidos';
    return this.http.post(url,JSON.stringify(pedido), { headers: this.tokenService.obtenerHeaders() });
  }
}
