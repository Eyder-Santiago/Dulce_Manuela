import { Component, OnInit } from '@angular/core';
import { Pedido } from '../modelo/pedido';
import { PedidoService } from '../servicios/pedido.service';
import { Token } from '../modelo/token';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent {
  constructor(
    private pedidoService: PedidoService,
    private tokenService: TokenService,
  ) { }

  pedidos:Pedido[] = [];

  ngOnInit(): void {
    let token:Token = JSON.parse(this.tokenService.obtenerToken());
    this.pedidoService.getPedidosUsuario(token.idUsuario).subscribe((result:Pedido[]) => {
      this.pedidos = result;
    });
  }
}
