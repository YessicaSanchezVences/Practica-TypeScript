//importamos las clases Persona, Dirección, Teléfono y Mail.
import {Persona} from "./Persona";
import {Direccion} from "./direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";

// Creamos las direcciones, Telefonos, Mails y Personas.
let Direccion1 = new Direccion('Calle Costera', 5, 4, 'B', 46009, 'Valencia', 'Valencia');
let Mail1 = new Mail('Empresa', 'CarlosP@tech.com');
let Telefono1 = new Telefono('Empresa', 689289534);
let Persona1 = new Persona('Carlos','Sanchez Martín ', 40, '28383862M','20/1/1983','Azul','Masculino', [Direccion1], [Mail1], [Telefono1], 8);


let Direccion2 = new Direccion('Calle Frigola', 4, 16, 'A', 46983, 'Valencia', 'Valencia');
let Mail2 = new Mail('Personal', 'MariaPerz@google.com');
let Telefono2 = new Telefono('Personal', 689899294);
let Persona2 = new Persona('Maria','Perez Martinez', 20, '12345678A','20/1/2003','Negro','Femenino', [Direccion2], [Mail2], [Telefono2], 7);


let Direccion3 = new Direccion('Calle Fernando el Catolico', 4, 8, 'C', 45006, 'Valencia', 'Valencia');
let Mail3 = new Mail('Personal', 'CarlaGonz@hotmail.es');
let Telefono3 = new Telefono('Personal', 689899296);
let Persona3 = new Persona('Carla','Gonzalez Salgado', 30 ,'23456789L','20/1/1993','Amarillo','Femenino', [Direccion3], [Mail3], [Telefono3], 10);


//Imprimirmos las 3 personas.
console. log('');
console. log(' Registro Personas:');

console. log('');
console.log(Persona1);

console. log('');
console.log(Persona2);

console. log('');
console.log(Persona3);


// Buscarmos a la persona por el DNI.
let personaModificada = Persona3.buscarPorDni!('23456789L');

// Si se encuentra a la persona, se agregará la nueva dirección, mail y teléfono.
if (personaModificada) {
  let nuevaDireccion = new Direccion('Calle Gran Via', 48, 2, 'C', 45008, 'Valencia','Valencia');
  let nuevoMail = new Mail('Trabajo', 'Carla@gmail.com');
  let nuevoTelefono = new Telefono('Trabajo', 689952375);

  personaModificada.Direcciones.push(nuevaDireccion);
  personaModificada.Mails.push(nuevoMail);
  personaModificada.Telefonos.push(nuevoTelefono);
}

//Imprimimos los nuevos datos.
console. log('');
console.log('Registro Actualizado:');

console. log('');
console.log(Persona1);

console. log('');
console.log(Persona2);

console. log('');
console.log(Persona3);