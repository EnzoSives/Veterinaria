export abstract class Persona {
    protected nombre: string;
    protected direccion: string;
    protected telefono: number;
    protected id: number;
    constructor(id: number, nombre: string, direccion: string, telefono: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.id = id;
    }
    abstract construirMensaje(): string;
    saludar(nombre: string): void {
        console.log('Hola', nombre);
    }
    getNombre(): string {
        return this.nombre;
    }
    getTelefono(): number {
        return this.telefono;
    }
    getDireccion(): string {
        return this.direccion;
    }
    getId(){
        return this.id;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    setTelefono(telefono: number) {
        this.telefono = telefono;
    }
    setDireccion(direccion: string) {
        this.direccion = direccion;
    }
    setiId(id:number){
        this.id=id;
    }
}