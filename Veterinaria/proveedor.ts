import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Proveedor extends Persona implements IComunicarse {
    
    private id : number;
    private cuil:number;

    constructor(cuil: number, nombre: string, direccion: string, telefono: number) {
        super(nombre,direccion,telefono);
        this.cuil = cuil;
        this.id = this.id;
    }
    
    EnviarMensaje(): string {
        return "Hola " + this.getNombre;
    }

    construirMensaje(): string {
        return "Mensaje";
    }
    getId(): number {
        return this.id;
    }
    getcuil(): number {
        return this.cuil;
    }
    setId(id: number): void {
        this.id = id;  
    }
    setCuil(newCuil: number) {
        this.cuil = newCuil;
    }


}
