import * as ReadlineSync from "readline-Sync";
import  {Cliente} from "./cliente"
import  {Paciente} from "./paciente"
class Veterinaria{
    private id : number;
    private nombre : string;
    private direccion : string;
    private telefono : number;
    private clientes : Cliente[];
    private pacientes : Paciente[];
    constructor(id : number, nombre : string, direccion : string, telefono : number,clientes : Cliente[], pacientes : Paciente[]) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
       this.clientes = clientes;
        this.pacientes = pacientes;
    }
    altaCliente(cliente:Cliente){
        this.clientes.push(cliente);
    }
    modificarCliente(cliente:Cliente){
        for (let i = 0; i < this.clientes.length; i++) {
            this.clientes[i].setNombre =  ReadlineSync.question('Nombre de Cliente');
    }}
    bajaCliente(cliente:Cliente){
        this.clientes.splice(this.clientes.indexOf(cliente));
    }
    altaPaciente(paciente:Paciente){
        this.pacientes.push(paciente);
    }
    modificarPaciente(paciente:Paciente){}
bajaPaciente(paciente:Paciente){
        this.pacientes.splice(this.pacientes.indexOf(paciente));
    }
    setTelefono(telefono:number){
        this.telefono = telefono;
    }
    setDireccion(direccion:string){
        this.direccion = direccion;
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