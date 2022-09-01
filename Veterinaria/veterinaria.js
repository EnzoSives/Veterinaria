"use strict";
exports.__esModule = true;
exports.Veterinaria = void 0;
var ReadlineSync = require("readline-Sync");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.clientes = [];
        this.pacientes = [];
    }
    Veterinaria.prototype.altaCliente = function (cliente) {
        var id = 0;
        while (id == 0) {
            id = Math.floor(Math.random() * 100);
            if (cliente.getId() == id) {
                id = 0;
            }
            else {
                this.clientes.push(cliente);
                cliente.setId(id);
            }
        }
    };
    Veterinaria.prototype.modificarCliente = function (cliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] == cliente) {
                this.clientes[i].nombre = ReadlineSync.question('Nombre de Cliente: ');
                this.clientes[i].direccion = ReadlineSync.question('Direccion de Cliente: ');
                this.clientes[i].telefono = ReadlineSync.question('Telefono de Cliente: ');
            }
        }
    };
    Veterinaria.prototype.bajaCliente = function (cliente) {
        this.clientes.splice(this.clientes.indexOf(cliente));
    };
    Veterinaria.prototype.altaPaciente = function (paciente) {
        this.pacientes.push(paciente);
    };
    Veterinaria.prototype.modificarPaciente = function (paciente) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i] === paciente)
                this.pacientes[i].nombre = ReadlineSync.question('Nombre del Paciente: ');
            this.pacientes[i].especie = ReadlineSync.question('Especie del Paciente: ');
            this.pacientes[i].edad = ReadlineSync.question('Edad del Paciente: ');
        }
    };
    Veterinaria.prototype.bajaPaciente = function (paciente) {
        this.pacientes.splice(this.pacientes.indexOf(paciente));
    };
    Veterinaria.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
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
    Veterinaria.prototype.esVip = function (cliente) {
        if (cliente.getVisitas() >= 4) {
            console.log("Es vip");
        }
        else {
            console.log("No es vip");
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
