export class Paciente {
    private nombre:string;
    private especie:string;
    private edad:number;
    
    constructor (nombre:string, especie:string, edad:number, visita:number) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        
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
    
    setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }
    setEspecie(nuevaEspecie: string) {
        this.especie = nuevaEspecie;
    }
    setEdad(nuevaEdad: number){
        this.edad = nuevaEdad;
    }
}