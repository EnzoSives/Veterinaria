import { Proveedor } from "./proveedor";
import { Veterinaria } from "./veterinaria";
import *as ReadlineSync from "readline-sync";

export class RedVeterinarias {
    private nombre: string;
    private proveedores: Proveedor[];
    private veterinarias: Veterinaria[];

    constructor(nombre:string){
        this.nombre = nombre;
        this.proveedores = [];
        this.veterinarias = [];
    }

    altaProveedor(proveedor: Proveedor) {
        let id:number = 0;
        while(id == 0){
            id = Math.floor(Math.random()* 100)

            if(proveedor.getId() == id){
                id = 0 
            } else {
                this.proveedores.push(proveedor)  
                proveedor.setId(id) 
            }
        }
    }
    bajaProveedor(proveedor: Proveedor) {
       this.proveedores.splice(this.proveedores.indexOf(proveedor))
    }
    modificarProveedor(proveedor: Proveedor, nuevoProveedor: Proveedor) {
        for (let i = 0; i < this.proveedores.length; i++) {
            if(this.proveedores[i].getId === nuevoProveedor.getId){
                proveedor[i].setNombre(ReadlineSync.question('Ingrese el nombre del nuevo proveedor: '));
                proveedor[i].setCuil(ReadlineSync.question('Ingrese el cuil del proveedor: '));
        }
    }}
    altaVeterinaria(veterinaria: Veterinaria): void{
        let id:number = 0;
        while(id == 0){
            id = Math.floor(Math.random()* 100)

            if(veterinaria.getId() == id){
                id = 0 
            } else {
                this.veterinarias.push(veterinaria)  
                veterinaria.setId(id) 
            }
        }
    }
    
    bajaVeterinaria(veterinaria: Veterinaria): void{
        this.veterinarias.splice(this.veterinarias.indexOf(veterinaria))
    }
    modificarVeterinaria(veterinaria: Veterinaria, nuevaVeterinaria: Veterinaria): void {
        for (let i = 0; i < this.proveedores.length; i++) {
            if(this.veterinarias[i].getId=== nuevaVeterinaria.getId){
                veterinaria[i].setNombre(ReadlineSync.question('Ingrese el nombre de la veterinaria: '));
                veterinaria[i].setDireccion(ReadlineSync.question('Ingrese la direccion: '));
                veterinaria[i].setTelefono(ReadlineSync.question('Ingrese el telefono: '));
        }
    }}
}