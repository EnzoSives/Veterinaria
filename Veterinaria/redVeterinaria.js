"use strict";
exports.__esModule = true;
exports.RedVeterinarias = void 0;
var ReadlineSync = require("readline-sync");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.nombre = nombre;
        this.proveedor = [];
        this.veterinarias = [];
    }
    RedVeterinarias.prototype.altaProveedor = function (proveedor) {
        this.proveedor.push(proveedor);
    };
    RedVeterinarias.prototype.bajaProveedor = function (proveedor) {
        this.proveedor.splice(this.proveedor.indexOf(proveedor));
    };
    RedVeterinarias.prototype.modificarProveedor = function (proveedor, nuevoProveedor) {
        for (var i = 0; i < this.proveedor.length; i++) {
            this.proveedor[i] = ReadlineSync.question('ingrese datos de nuevo proveedor');
        }
    };
    RedVeterinarias.prototype.altaVeterinaria = function (veterinaria) {
        this.veterinarias.push(veterinaria);
    };
    RedVeterinarias.prototype.bajaVeterinaria = function (veterinaria) {
        this.veterinarias.splice(this.veterinarias.indexOf(veterinaria));
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (veterinaria, nuevaVeterinaria) {
        for (var i = 0; i < this.veterinarias.length; i++) {
            this.veterinarias[i] = ReadlineSync.question("ingresar datos de nueva veterinaria");
        }
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
