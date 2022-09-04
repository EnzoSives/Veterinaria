import {Cliente} from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { RedVeterinarias } from "./redVeterinaria";
import { Veterinaria } from "./veterinaria";
import { IComunicarse} from "./IComunicarse";

let nuevaRed = new RedVeterinarias("Veterinarias");
let veterinaria1 = new Veterinaria("vete1", "Portugal", 121212);
let cliente1 = new Cliente("Portugal",1564446,"Baltazar",46654,5);
let cliente2 = new Cliente("Colombia",97809707,"Enzo",46654,5);
let cliente3 = new Cliente("Colombia",97809707,"Enzo2",46654,5);
let cliente4 = new Cliente("Colombia",97809707,"Enzo3",46654,5);
let cliente5 = new Cliente("Colombia",97809707,"Enzo4",46654,5);
let paciente1 = new Paciente("Enzo","Perro",12);
let paciente2 = new Paciente("Enzo2","Perro3",1);
let paciente3 = new Paciente("Enzo3","Perro2",12);
let paciente4 = new Paciente("Enzo4","Perro2",12);
let proveedor1 = new Proveedor(23002022,"Enzo","Portugal",131313);
let proveedor2 = new Proveedor(230020,"Enzo","Portugal",131313);


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

