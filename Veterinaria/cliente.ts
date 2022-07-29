
import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class cliente extends Persona implements IComunicarse {
   private id: number;
    
    constructor (id: number, direccion: string, telefono: number,nombre: string) {
        super(nombre, direccion, telefono);
        this.id = id;
    }
    construirMensaje(): string {
        return "hola";
    }
    
    EnviarMensaje(receptor: string): string {
        return "Mensaje";
    }

    public getId() {
        return this.id;
    }
   
    public setId(newId:number) {
        this.id = newId;
    }
}