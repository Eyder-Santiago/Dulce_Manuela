export class Usuario{
    id:number=0;
    nombre:string='';
    apellido:string='';
    email:string='';
    direccion:string='';
    birthDate:Date=new Date();
    estado:number=0;

    constructor(n:string, a:string, e:string, d:string, b:Date, es:number){
        this.nombre=n;
        this.apellido=a;
        this.email=e;
        this.direccion=d;
        this.birthDate=b;
        this.estado=es;
     }
}