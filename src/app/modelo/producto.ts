export class Producto{
     id:number=0;
     nombre:string="";
     precio:number=0;
     stock:number=0;
     estado:number=0;

     constructor(n:string, p:number,s:number,e:number){
        this.nombre=n;
        this.precio=p;
        this.stock=s;
        this.estado=e;
     }
}