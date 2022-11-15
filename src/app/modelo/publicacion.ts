import { Producto } from "./producto";


export class Publicacion extends Producto{
    idPublicacion:number=0;
    descripcion:string='';
    like:number=0;
    comentario:string='';

    constructor(
        nombre:string="",
        precio:number=0,
        stock:number=0,
        urlImagen:string='',
        estado:number=0,
        idPublicacion:number,
        descripcion:string,
        like:number,
        comentario:string
    ){
        super(nombre,precio,stock,urlImagen,estado);
        this.idPublicacion = idPublicacion;
        this.descripcion = descripcion;
        this.like = like;
        this.comentario = comentario;
    }

}