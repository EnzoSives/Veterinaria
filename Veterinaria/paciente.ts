export class Paciente {
    private nombre:string;
    private especie:string;
    private edad:number;
    private visita: number;
    constructor (nombre:string, especie:string, edad:number, visita:number) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.visita = visita;
    }
    public getNombre() {
        return this.nombre;
    }
    public getEspecie () {
        return this.especie;
    }
    public getEdad() {
        return this.edad;
    }
    getEsVip() {
        if (this.visita >=4){
            console.log ("Es vip");
        } else {
            console.log ("No es vip");
        }
    }
    }