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
exports.Cliente = void 0;
var persona_1 = require("./persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(direccion, telefono, nombre, cuil, visitas) {
        var _this = _super.call(this, nombre, direccion, telefono) || this;
        _this.cuil = cuil;
        _this.visitas = visitas;
        _this.id = _this.id;
        return _this;
    }
    Cliente.prototype.construirMensaje = function () {
        return "hola" + this.getNombre;
    };
    Cliente.prototype.EnviarMensaje = function () {
        return "Hola" + this.getNombre;
    };
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.setId = function (id) {
        this.id = id;
    };
    return Cliente;
}(persona_1.Persona));
exports.Cliente = Cliente;
