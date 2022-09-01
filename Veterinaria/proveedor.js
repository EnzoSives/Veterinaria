"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Proveedor = void 0;
var persona_1 = require("./persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(cuil, nombre, direccion, telefono) {
        var _this = _super.call(this, nombre, direccion, telefono) || this;
        _this.cuil = cuil;
        _this.id = Math.floor((Math.random() * 100) + 1);
        return _this;
    }
    Proveedor.prototype.EnviarMensaje = function (receptor) {
        return "Hola " + this.nombre;
    };
    Proveedor.prototype.construirMensaje = function () {
        return "Mensaje";
    };
    Proveedor.prototype.getcuil = function () {
        return this.cuil;
    };
    Proveedor.prototype.setCuil = function (newCuil) {
        this.cuil = newCuil;
    };
    return Proveedor;
}(persona_1.Persona));
exports.Proveedor = Proveedor;
