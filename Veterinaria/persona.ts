export abstract class Persona{
    
    constructor(private nombre: string, private direccion: string,private telefono: number) {}


    abstract construirMensaje(): string;
    
    saludar(nombre: string): void {
        console.log('Hola' , nombre);
    }

    getNombre(): string {
        return this.nombre;
    }

    getTelefono(): number{ 
        return this.telefono;
    }

    getDireccion(): string{
        return this.direccion;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    setTelefono(telefono: number){
        this.telefono = telefono;
    }

    setDireccion(direccion: string) {
        this.direccion = direccion;
    }


}