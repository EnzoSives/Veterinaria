export abstract class Persona{
    private nombre: string;
    private direccion: string;
    private telefono: number;
    
    
    abstract construirMensaje(): string;
    
    saludar(nombre: string): void {
        console.log('Hola' , nombre);
    }

    getNombre(): string {   
        return this.nombre;
    }

    getDireccion(): string { 
        return this.direccion;
    }

    getTelefono(): number {
        return this.telefono;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

}