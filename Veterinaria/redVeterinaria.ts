import { Proveedor } from "./proveedor";
import { Veterinaria } from "./veterinaria";
import *as ReadlineSync from "readline-sync";

export class RedVeterinarias {
    nombre: string;

    proveedor: Proveedor[];
    veterinarias: Veterinaria[];

    altaProveedor(proveedor: Proveedor) {
        this.proveedor.push(proveedor);
    }
    bajaProveedor(proveedor: Proveedor) {
       this.proveedor.splice(this.proveedor.indexOf(proveedor))
    }
    modificarProveedor(proveedor: Proveedor, nuevoProveedor: string) {
        for (let i = 0; i < this.proveedor.length; i++) {
            this.proveedor[i] = ReadlineSync.question('ingrese datos de nuevo proveedor');
        }
    }
    altaVeterinaria(veterinaria: Veterinaria) {
        this.veterinarias.push(veterinaria);
    }
    bajaVeterinaria(veterinaria: Veterinaria) {
        this.veterinarias.splice(this.veterinarias.indexOf(veterinaria))
    }
    modificarVeterinaria(veterinaria: Veterinaria, nuevaVeterinaria: string) {

        for (let i = 0; i < this.veterinarias.length; i++) {
            this.veterinarias[i]= ReadlineSync.question("ingresar datos de nueva veterinaria");
        }
    }
}