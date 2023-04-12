"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
//Exportamos y creamos la clase Teléfono.
var Telefono = /** @class */ (function () {
    // Se crea el constructor de la clase Teléfono.
    function Telefono(Tipo, Numero) {
        this._Tipo = Tipo;
        this._Numero = Numero;
    }
    Object.defineProperty(Telefono.prototype, "Tipo", {
        // Luego, creamos los metodos Getter y Setters de todos los Atributos.
        get: function () {
            return this._Tipo;
        },
        set: function (v) {
            this._Tipo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (v) {
            this._Numero = v;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
