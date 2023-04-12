"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
//Exportamos y creamos la clase Dirección.
var Direccion = /** @class */ (function () {
    // Se crea el constructor de la clase Dirección.
    function Direccion(Calle, Numero, Piso, letra, Codigo_Postal, Poblacion, Provincia) {
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._letra = letra;
        this._Codigo_Postal = Codigo_Postal;
        this._Poblacion = Poblacion;
        this._Provincia = Provincia;
    }
    Object.defineProperty(Direccion.prototype, "Calle", {
        // Luego, creamos los metodos Getter y Setters de todos los Atributos.  
        get: function () {
            return this._Calle;
        },
        set: function (v) {
            this._Calle = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (v) {
            this._Numero = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Piso", {
        get: function () {
            return this._Piso;
        },
        set: function (v) {
            this._Piso = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (v) {
            this._letra = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Codigo_Postal", {
        get: function () {
            return this._Codigo_Postal;
        },
        set: function (v) {
            this._Codigo_Postal = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Poblacion", {
        get: function () {
            return this._Poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Poblaci\u00F3n", {
        set: function (v) {
            this._Poblacion = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Provincia", {
        get: function () {
            return this._Provincia;
        },
        set: function (v) {
            this._Provincia = v;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
