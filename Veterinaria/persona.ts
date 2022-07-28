export abstract class Persona{
    
    abstract construirMensaje(): string;
    
    saludar(nombre: string): void {
        console.log('Hola' , nombre);
    }
    
}