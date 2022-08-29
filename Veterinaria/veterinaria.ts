import * as ReadlineSync from "readline-Sync";
import  {Cliente} from "./cliente"
import  {Paciente} from "./paciente"
export class Veterinaria{
    
    protected id : number;
    private nombre : string;
    private direccion : string;
    private telefono : number;
    private clientes : Cliente[];
    private pacientes : Paciente[];
    
    constructor(id : number, nombre : string, direccion : string, telefono : number) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        
    }


    public generarId(): number {
        return  this.id = Math.floor((Math.random() * 100) + 1);
    }

    altaCliente(cliente:Cliente): void {
        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i] === cliente)
            this.clientes.push(cliente);
            this.id = Math.floor((Math.random() * 100) + 1);       
        
    }}

    modificarCliente(cliente:Cliente){
        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i] === cliente)
            this.clientes[i].setNombre =  ReadlineSync.question('Nombre de Cliente');
    }}
    bajaCliente(cliente:Cliente){
        this.clientes.splice(this.clientes.indexOf(cliente));
    }
    altaPaciente(paciente:Paciente){
        this.pacientes.push(paciente);
    }
    modificarPaciente(paciente:Paciente){
        for (let i = 0; i < this.pacientes.length; i++) {
            if(this.pacientes[i]=== paciente)
            this.pacientes[i].setNombre =  ReadlineSync.question('Nombre del Paciente');
            this.pacientes[i].setEspecie =  ReadlineSync.question('Especie del Paciente');
            this.pacientes[i].setEdad =  ReadlineSync.question('Edad del Paciente');
    }}
    
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
        this.id= id;
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

