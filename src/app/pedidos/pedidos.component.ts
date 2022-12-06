import { Component, OnInit } from '@angular/core';
import { Pedido } from '../modelo/pedido';
import { PedidoService } from '../servicios/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  constructor(
    private pedidoService: PedidoService
  ) { }

  pedidos:Pedido[] = [];

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((result:Pedido[]) => {
      this.pedidos = result;
    });
  }
}
