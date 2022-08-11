"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var cliente_1 = require("./cliente");
var Veterinaria = /** @class */ (function () {
    //private pacientes : Pacientes[];
    function Veterinaria(id, nombre, direccion, telefono /**pacientes : Pacientes[]**/) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        //this.pacientes = pacientes;
    }
    Veterinaria.prototype.altaCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Veterinaria.prototype.modificarCliente = function (cliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            this.clientes[i].setNombre = ReadlineSync.question('Nombre de Cliente');
            this.clientes[i].setDireccion = ReadlineSync.question('Direccion del cliente');
            this.clientes[i].setTelefono = ReadlineSync.question('Telefono del cliente');
        }
    };
    Veterinaria.prototype.bajaCliente = function (cliente) {
        this.clientes.splice(this.clientes.indexOf(cliente));
    };
    /**altaPaciente(paciente:Pacientes){
        this.pacientes.push(paciente);
    }**/
    //modificarPaciente(paciente:Pacientes){}
    /**bajaPaciente(paciente:Pacientes){
        this.pacientes.splice(this.pacientes.indexOf(paciente);
    }**/
    Veterinaria.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getTelefono = function () {
        return this.telefono;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    return Veterinaria;
}());
var cliente1 = new cliente_1.Cliente(7, 'Portugal 1005', 637368, 'Enzo');
var Veterinaria1 = new Veterinaria(1, "VETE", "Sarmiento 123", 565958);
Veterinaria1.modificarCliente(cliente1); 
console.log(cliente1); 
