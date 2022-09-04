"use strict";
exports.__esModule = true;
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var proveedor_1 = require("./proveedor");
var redVeterinaria_1 = require("./redVeterinaria");
var veterinaria_1 = require("./veterinaria");
var nuevaRed = new redVeterinaria_1.RedVeterinarias("Veterinarias");
var veterinaria1 = new veterinaria_1.Veterinaria("vete1", "Portugal", 121212);
var cliente1 = new cliente_1.Cliente("Portugal", 1564446, "Baltazar", 46654, 5);
var cliente2 = new cliente_1.Cliente("Colombia", 97809707, "Enzo", 46654, 5);
var cliente3 = new cliente_1.Cliente("Colombia", 97809707, "Enzo2", 46654, 5);
var cliente4 = new cliente_1.Cliente("Colombia", 97809707, "Enzo3", 46654, 5);
var cliente5 = new cliente_1.Cliente("Colombia", 97809707, "Enzo4", 46654, 5);
var paciente1 = new paciente_1.Paciente("Enzo", "Perro", 12);
var paciente2 = new paciente_1.Paciente("Enzo2", "Perro3", 1);
var paciente3 = new paciente_1.Paciente("Enzo3", "Perro2", 12);
var paciente4 = new paciente_1.Paciente("Enzo4", "Perro2", 12);
var proveedor1 = new proveedor_1.Proveedor(23002022, "Enzo", "Portugal", 131313);
var proveedor2 = new proveedor_1.Proveedor(230020, "Enzo", "Portugal", 131313);
/*nuevaRed.altaVeterinaria(veterinaria1);
nuevaRed.altaProveedor(proveedor1);
nuevaRed.altaProveedor(proveedor2);
veterinaria1.altaCliente(cliente1);
veterinaria1.altaCliente(cliente3);
veterinaria1.altaCliente(cliente4);
veterinaria1.altaPaciente(paciente4);
veterinaria1.bajaCliente(cliente2);
veterinaria1.modificarCliente(cliente1);
veterinaria1.modificarPaciente(paciente4);*/
proveedor1.EnviarMensaje();
cliente1.construirMensaje();
//console.log(veterinaria1);
