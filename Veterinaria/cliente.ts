import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Cliente extends Persona implements IComunicarse {
   private cuil:number;
   private visitas: number;
   protected id:number;
    
    constructor (direccion: string, telefono: number,nombre: string, cuil : number, visitas: number) {
        super(nombre, direccion, telefono);
        this.cuil = cuil;
        this.visitas = visitas;
        this.id = Math.floor((Math.random() * 100) + 1);
    }
    
    construirMensaje(): string {
        return "hola" + this.nombre;
    }
    
    EnviarMensaje(receptor: string): string {
        return "Mensaje";
    }
    getId(): number{
        return this.id;
    }
    getVisitas(): number{
        return this.visitas;
    }
    setId(id:number){
        this.id = id;
    }
    
}