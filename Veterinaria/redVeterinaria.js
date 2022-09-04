"use strict";
exports.__esModule = true;
exports.RedVeterinarias = void 0;
var ReadlineSync = require("readline-sync");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.nombre = nombre;
        this.proveedores = [];
        this.veterinarias = [];
    }
    RedVeterinarias.prototype.altaProveedor = function (proveedor) {
        var id = 0;
        while (id == 0) {
            id = Math.floor(Math.random() * 100);
            if (proveedor.getId() == id) {
                id = 0;
            }
            else {
                this.proveedores.push(proveedor);
                proveedor.setId(id);
            }
        }
    };
    RedVeterinarias.prototype.bajaProveedor = function (proveedor) {
        this.proveedores.splice(this.proveedores.indexOf(proveedor));
    };
    RedVeterinarias.prototype.modificarProveedor = function (proveedor, nuevoProveedor) {
        for (var i = 0; i < this.proveedores.length; i++) {
            if (proveedor[i] === nuevoProveedor) {
                proveedor[i].setNombre(ReadlineSync.question('Ingrese el nombre del nuevo proveedor: '));
                proveedor[i].setCuil(ReadlineSync.question('Ingrese el cuil del proveedor: '));
            }
        }
    };
    RedVeterinarias.prototype.altaVeterinaria = function (veterinaria) {
        var id = 0;
        while (id == 0) {
            id = Math.floor(Math.random() * 100);
            if (veterinaria.getId() == id) {
                id = 0;
            }
            else {
                this.veterinarias.push(veterinaria);
                veterinaria.setId(id);
            }
        }
    };
    RedVeterinarias.prototype.bajaVeterinaria = function (veterinaria) {
        this.veterinarias.splice(this.veterinarias.indexOf(veterinaria));
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (veterinaria, nuevaVeterinaria) {
        for (var i = 0; i < this.proveedores.length; i++) {
            if (veterinaria[i] === nuevaVeterinaria) {
                veterinaria[i].setNombre(ReadlineSync.question('Ingrese el nombre de la veterinaria: '));
                veterinaria[i].setDireccion(ReadlineSync.question('Ingrese la direccion: '));
                veterinaria[i].setTelefono(ReadlineSync.question('Ingrese el telefono: '));
            }
        }
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
