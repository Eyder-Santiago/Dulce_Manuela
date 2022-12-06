import { DetallePedido } from './detallePedido';
import { Usuario } from './usuario';

export class Pedido {
    constructor(
        public id:number = 0,
        public cantidadProductos:number = 0,
        public precioTotal:number = 0,
        public medioPago:string = "",
        public informacionPago:string = "",
        public estado:string = "",
        public fecha:string = "",
        public idUsuario:number = 0,
        public usuario:Usuario = new Usuario("", "", "", "", new Date(), "", "", 1),
        public detalles:DetallePedido[] = []) {
    }
}