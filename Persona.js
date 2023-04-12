"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Exportamos y creamos la clase Persona.
var Persona = /** @class */ (function () {
    // Se crea el constructor de la clase Persona.
    function Persona(Nombre, Apellidos, Edad, DNI, Cumpleaños, Color_Favorito, Sexo, Direcciones, Mails, Telefonos, Notas) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI = DNI;
        this._Cumpleaños = Cumpleaños;
        this._Color_Favorito = Color_Favorito;
        this._Sexo = Sexo;
        this._Direcciones = Direcciones;
        this._Mails = Mails;
        this._Telefonos = Telefonos;
        this._Notas = Notas;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        // Luego, creamos los metodos Getter y Setters de todos los Atributos.       
        get: function () {
            return this._Nombre;
        },
        set: function (v) {
            this._Nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellidos", {
        get: function () {
            return this._Apellidos;
        },
        set: function (v) {
            this._Apellidos = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this._Edad;
        },
        set: function (v) {
            this._Edad = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Cumplea\u00F1os", {
        get: function () {
            return this._Cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Color_Favorito", {
        get: function () {
            return this._Color_Favorito;
        },
        set: function (v) {
            this._Color_Favorito = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Sexo", {
        get: function () {
            return this._Sexo;
        },
        set: function (v) {
            this._Sexo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Direcciones", {
        get: function () {
            return this._Direcciones;
        },
        set: function (v) {
            this._Direcciones = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Mails", {
        get: function () {
            return this._Mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Mail", {
        set: function (v) {
            this._Mails = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Telefonos", {
        get: function () {
            return this._Telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Telefono", {
        set: function (v) {
            this._Telefonos = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Notas", {
        get: function () {
            return this._Notas;
        },
        set: function (v) {
            this._Notas = v;
        },
        enumerable: false,
        configurable: true
    });
    // Creamos un método para buscar personas por DNI.
    Persona.prototype.buscarPorDni = function (dniP) {
        if (this._DNI === dniP) {
            return this;
        }
        return undefined;
    };
    return Persona;
}());
exports.Persona = Persona;
