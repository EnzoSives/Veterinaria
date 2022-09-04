import { IComunicarse } from "./IComunicarse";
import { Persona } from "./persona";

export class Cliente extends Persona implements IComunicarse {
   private cuil:number;
   private visitas: number;
   private id:number;
    
    constructor (direccion: string, telefono: number,nombre: string, cuil : number, visitas: number) {
        super(nombre, direccion, telefono);
        this.cuil = cuil;
        this.visitas = visitas;
        this.id = this.id;
    }
    
    construirMensaje(): string {
        return "hola" + this.getNombre;
    }
    
    EnviarMensaje(): string {
        return "Hola" + this.getNombre;
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