import * as ReadlineSync from "readline-Sync";
import  {Cliente} from "./cliente"
import  {Paciente} from "./paciente"
export class Veterinaria{
    
    private id: number;
    private nombre : string;
    private direccion : string;
    private telefono : number;
    private clientes : Cliente[];
    private pacientes : Paciente[];
    
    constructor( nombre : string, direccion : string, telefono : number) {
        this.id = this.id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.clientes = [];
        this.pacientes = [];
    }

    altaCliente(cliente:Cliente): void {
    let id:number = 0;
        while(id == 0){
            id = Math.floor(Math.random()* 100)

            if(cliente.getId() == id){
                id = 0 
            } else {
                this.clientes.push(cliente)  
                cliente.setId(id) 
            }
        }
    }
    modificarCliente(cliente:Cliente){
        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i] == cliente){
            this.clientes[i].setNombre(ReadlineSync.question('Nombre de Cliente: '));
            this.clientes[i].setDireccion(ReadlineSync.question('Direccion de Cliente: '));
            this.clientes[i].setTelefono(ReadlineSync.question('Telefono de Cliente: '));
    }}}
    
    bajaCliente(cliente:Cliente){
        this.clientes.splice(this.clientes.indexOf(cliente));
    }
    
    altaPaciente(paciente:Paciente, duenio: Cliente){
        let nuevoId;
            this.pacientes.push(paciente)  
                duenio.getId = nuevoId;
                paciente.setId(nuevoId);
            }
    
    modificarPaciente(paciente:Paciente){
        for (let i = 0; i < this.pacientes.length; i++) {
            if(this.pacientes[i]=== paciente)
            this.pacientes[i].setNombre(ReadlineSync.question('Nombre del Paciente: '));
            this.pacientes[i].setEspecie(ReadlineSync.question('Especie del Paciente: '));
            this.pacientes[i].setEdad(ReadlineSync.question('Edad del Paciente: '));
    }}

    esVip(cliente: Cliente) {
        if ( cliente.getVisitas()>=4){
            console.log ("Es vip");
        } else {
            console.log ("No es vip");
        }
    }

    bajaPaciente(paciente:Paciente){
        this.pacientes.splice(this.pacientes.indexOf(paciente));
    }
    setTelefono(telefono:number){
        this.telefono = telefono;
    }
    setDireccion(direccion:string){
        this.direccion = direccion;
    }
    setId(id:number){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    
    getTelefono(){
        return this.telefono;
    }
    getDireccion(){
        return  this.direccion;
    }
    getNombre(){
        return this.nombre;
    }

}
