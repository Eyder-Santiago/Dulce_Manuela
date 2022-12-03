import { Producto } from "./producto";


//export class Publicacion extends Producto{
export class Publicacion{
    idPublicacion:number=0;
    descripcion:string='';
    likeP:number=0;
    comentario:string='';
    estado:number=0;
    //producto : Producto = new Producto('',0,0,'',0);
    producto : Producto[];

    constructor(
        descripcion:string,
        like:number,
        comentario:string,
        estado:number,
        producto:Producto[]
    ){

        this.descripcion = descripcion;
        this.likeP = like;
        this.comentario = comentario;
        this.estado = estado;
        this.producto = producto;
    }

}