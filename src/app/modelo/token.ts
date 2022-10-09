export class Token{
    id_usuario:number = 0;
    token:string = '';
    valida:string = 'N';

    constructor(id_usuario:number, token:string, valida:string) {
        this.token = token;
        this.id_usuario = id_usuario;
        this.valida = valida;
    }
}