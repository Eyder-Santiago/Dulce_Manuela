import { Pedido } from './pedido';

export class RespuestaPedido{
    constructor(
        public exitoso:number = 0,
        public mensaje:string = "",
        public pedido:Pedido = new Pedido()
    ){
        
    }
}