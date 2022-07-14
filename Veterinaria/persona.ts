export class Persona{
    private nombre: string;
    private direccion: string;
    private telefono : number;
    protected id: number;


    constructor(nombre: string, direccion: string, 
        telefono: number,id: number) {   
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;   
        this.id = id;
        }

    getNombre(){
        return this.nombre;
    }
        
    getDireccion(){
        return this.direccion;
    }

    getTelefono(){
        return this.telefono;
    }

    getId(){
        return this.id;
    }   

    setDireccion(direccion: string) {   
        this.direccion = direccion;
    }
    
    setTelefono(telefono: number) {
        this.telefono = telefono;
    }

}
