"use strict";
exports.__esModule = true;
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.id = this.id;
    }
    Paciente.prototype.getId = function () {
        return this.id;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.setId = function (id) {
        this.id = id;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Paciente.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Paciente.prototype.setEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
