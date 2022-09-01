import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Proveedor extends Persona implements IComunicarse {
    
    protected id : number;
    private cuil:number;

    constructor(cuil: number, nombre: string, direccion: string, telefono: number) {
        super(nombre,direccion,telefono);
        this.cuil = cuil;
        this.id = Math.floor((Math.random() * 100) + 1);
    }
    
    EnviarMensaje(receptor: string): string {
        return "Hola " + this.nombre;
    }

    construirMensaje(): string {
        return "Mensaje";
    }

    getcuil(): number {
        return this.cuil;
    }
    setCuil(newCuil: number) {
        this.cuil = newCuil;
    }


}
