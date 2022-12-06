import { Producto } from './producto';

export class DetallePedido {
    constructor(
        public id:number = 0,
        public idPedido:number = 0,
        public idProducto:number = 0,
        public producto:Producto = new Producto("", 0, 0, "", "", 0),
        public cantidad:number = 0,
        public precioUnitario:number = 0,
        public precioTotal:number = 0
    ) {
        
    }
}