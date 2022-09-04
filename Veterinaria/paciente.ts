export class Paciente {
    private id;
    private nombre:string;
    private especie:string;
    private edad:number;
    
    constructor (nombre:string, especie:string, edad:number) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.id = this.id;
        
    }
    public getId() {
        return this.id;
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
    setId (id: number) {
        this.id = id;
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