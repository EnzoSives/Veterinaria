
import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Cliente extends Persona implements IComunicarse {
   private cuil:number;
   private visita: number;
    
    constructor (id: number,direccion: string, telefono: number,nombre: string) {
        super(nombre, direccion, telefono,id);
        this.cuil = this.cuil;
        this.visita = this.visita;
    }
    construirMensaje(): string {
        return "hola";
    }
    
    EnviarMensaje(receptor: string): string {
        return "Mensaje";
    }

    getEsVip() {
        if (this.visita >=4){
            console.log ("Es vip");
        } else {
            console.log ("No es vip");
        }
    }
}