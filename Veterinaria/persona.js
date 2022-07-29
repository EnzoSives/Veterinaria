"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Persona.prototype.saludar = function (nombre) {
        console.log('Hola', nombre);
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    return Persona;
}());
exports.Persona = Persona;
