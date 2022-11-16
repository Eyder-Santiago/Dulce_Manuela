import { Producto } from "./producto";


//export class Publicacion extends Producto{
export class Publicacion{
    idPublicacion:number=0;
    descripcion:string='';
    like:number=0;
    comentario:string='';
    estado:number=0;

    Producto : {
        id:number;
        nombre:string;
        precio:number;
        urlImagen:string;
    }

    constructor(
        descripcion:string,
        like:number,
        comentario:string,
        estado:number
    ){

        this.descripcion = descripcion;
        this.like = like;
        this.comentario = comentario;
        this.estado = estado;
    }

}