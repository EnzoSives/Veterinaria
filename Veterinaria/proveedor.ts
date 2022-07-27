
import { Persona } from "./persona";

export class Proveedor extends Persona {
    private cuil: number;

    constructor(cuit: number, nombre: string, direccion: string, telefono: number, id: number) {
        super(nombre, direccion, telefono, id);
        this.cuil = cuit;
    }

    getcuil(): number {
        return this.cuil;
    }
}