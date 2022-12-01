import { Producto } from './producto';

export class ProductoCarrito{
    cantidad:number=0;
    producto:Producto

    constructor(cantidad:number, producto:Producto){
       this.cantidad = cantidad;
       this.producto = producto;
    }
}
