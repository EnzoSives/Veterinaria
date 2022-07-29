import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Proveedor extends Persona implements IComunicarse {
    
    private cuil:number;

    constructor(cuil: number, nombre: string, direccion: string, telefono: number) {
        super(nombre,direccion,telefono);
        this.cuil = this.cuil;
    }
    
    EnviarMensaje(receptor: string): string {
        return "mensaje";
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
