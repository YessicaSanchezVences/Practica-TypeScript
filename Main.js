"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos las clases Persona, Dirección, Teléfono y Mail.
var Persona_1 = require("./Persona");
var direccion_1 = require("./direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
// Creamos las direcciones, Telefonos, Mails y Personas.
var Direccion1 = new direccion_1.Direccion('Calle Costera', 5, 4, 'B', 46009, 'Valencia', 'Valencia');
var Mail1 = new Mail_1.Mail('Empresa', 'CarlosP@tech.com');
var Telefono1 = new Telefono_1.Telefono('Empresa', 689289534);
var Persona1 = new Persona_1.Persona('Carlos', 'Sanchez Martín ', 40, '28383862M', '20/1/1983', 'Azul', 'Masculino', [Direccion1], [Mail1], [Telefono1], 8);
var Direccion2 = new direccion_1.Direccion('Calle Frigola', 4, 16, 'A', 46983, 'Valencia', 'Valencia');
var Mail2 = new Mail_1.Mail('Personal', 'MariaPerz@google.com');
var Telefono2 = new Telefono_1.Telefono('Personal', 689899294);
var Persona2 = new Persona_1.Persona('Maria', 'Perez Martinez', 20, '12345678A', '20/1/2003', 'Negro', 'Femenino', [Direccion2], [Mail2], [Telefono2], 7);
var Direccion3 = new direccion_1.Direccion('Calle Fernando el Catolico', 4, 8, 'C', 45006, 'Valencia', 'Valencia');
var Mail3 = new Mail_1.Mail('Personal', 'CarlaGonz@hotmail.es');
var Telefono3 = new Telefono_1.Telefono('Personal', 689899296);
var Persona3 = new Persona_1.Persona('Carla', 'Gonzalez Salgado', 30, '23456789L', '20/1/1993', 'Amarillo', 'Femenino', [Direccion3], [Mail3], [Telefono3], 10);
//Imprimirmos las 3 personas.
console.log('');
console.log(' Registro Personas:');
console.log('');
console.log(Persona1);
console.log('');
console.log(Persona2);
console.log('');
console.log(Persona3);
// Buscarmos a la persona por el DNI.
var personaModificada = Persona3.buscarPorDni('23456789L');
// Si se encuentra a la persona, se agregará la nueva dirección, mail y teléfono.
if (personaModificada) {
    var nuevaDireccion = new direccion_1.Direccion('Calle Gran Via', 48, 2, 'C', 45008, 'Valencia', 'Valencia');
    var nuevoMail = new Mail_1.Mail('Trabajo', 'Carla@gmail.com');
    var nuevoTelefono = new Telefono_1.Telefono('Trabajo', 689952375);
    personaModificada.Direcciones.push(nuevaDireccion);
    personaModificada.Mails.push(nuevoMail);
    personaModificada.Telefonos.push(nuevoTelefono);
}
//Imprimimos los nuevos datos.
console.log('');
console.log('Registro Actualizado:');
console.log('');
console.log(Persona1);
console.log('');
console.log(Persona2);
console.log('');
console.log(Persona3);
