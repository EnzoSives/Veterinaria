
import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Cliente extends Persona implements IComunicarse {
   private cuil:number;
   private visita: number;
    
    constructor (id: number, direccion: string, telefono: number,nombre: string) {
        super(id,nombre, direccion, telefono);
        this.cuil = this.cuil;
        this.visita = this.visita;
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

    public generarId(): number {
        return  this.id = Math.floor((Math.random() * 100) + 1);
      }

      getEsVip() {
        if (this.visita >=4){
            console.log ("Es vip");
        } else {
            console.log ("No es vip");
        }
    }
}