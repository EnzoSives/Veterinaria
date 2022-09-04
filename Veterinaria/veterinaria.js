"use strict";
exports.__esModule = true;
exports.Veterinaria = void 0;
var ReadlineSync = require("readline-Sync");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, telefono) {
        this.id = this.id;
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
                this.clientes[i].setNombre(ReadlineSync.question('Nombre de Cliente: '));
                this.clientes[i].setDireccion(ReadlineSync.question('Direccion de Cliente: '));
                this.clientes[i].setTelefono(ReadlineSync.question('Telefono de Cliente: '));
            }
        }
    };
    Veterinaria.prototype.bajaCliente = function (cliente) {
        this.clientes.splice(this.clientes.indexOf(cliente));
    };
    Veterinaria.prototype.altaPaciente = function (paciente) {
        var id = 0;
        while (id == 0) {
            id = Math.floor(Math.random() * 100);
            if (paciente.getId() == id) {
                id = 0;
            }
            else {
                this.pacientes.push(paciente);
                paciente.setId(id);
            }
        }
    };
    Veterinaria.prototype.modificarPaciente = function (paciente) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i] === paciente)
                this.pacientes[i].setNombre(ReadlineSync.question('Nombre del Paciente: '));
            this.pacientes[i].setEspecie(ReadlineSync.question('Especie del Paciente: '));
            this.pacientes[i].setEdad(ReadlineSync.question('Edad del Paciente: '));
        }
    };
    Veterinaria.prototype.esVip = function (cliente) {
        if (cliente.getVisitas() >= 4) {
            console.log("Es vip");
        }
        else {
            console.log("No es vip");
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
    Veterinaria.prototype.setId = function (id) {
        this.id = id;
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
exports.Veterinaria = Veterinaria;
