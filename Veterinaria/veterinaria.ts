class Veterinaria{
    private id : number;
    private nombre : string;
    private direccion : string;
    private telefono : number;
    private clientes : Cliente[];
    private pacientes : Pacientes[];

    constructor(id : number, nombre : string, direccion : string, telefono : number, clientes : Cliente[], pacientes : Pacientes[]) {
        this.id = id;
        this.nombre = nombre;   
        this.direccion = direccion;
        this.telefono = telefono;
        this.clientes = clientes;
        this.pacientes = pacientes;
    }  

    altaCliente(cliente:Cliente){}
    
    modificarCliente(cliente:Cliente){}

    bajaCliente(cliente:Cliente){}

    altaPaciente(paciente:Pacientes){}

    modificarPaciente(paciente:Pacientes){}

    bajaPaciente(paciente:Pacientes){} 

    setTelefono(telefono:number){}

    setDireccion(direccion:string){}

    getId(){}

    getTelefono(){}

    getDireccion(){}

    getNombre(){}
    
}