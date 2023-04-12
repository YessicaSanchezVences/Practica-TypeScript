"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
//Exportamos y creamos la clase Mail.
var Mail = /** @class */ (function () {
    // Se crea el constructor de la clase Mail.
    function Mail(Tipo, DireccionM) {
        this._Tipo = Tipo;
        this._DireccionM = DireccionM;
    }
    Object.defineProperty(Mail.prototype, "Tipo", {
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
    Object.defineProperty(Mail.prototype, "DireccionM", {
        get: function () {
            return this._DireccionM;
        },
        set: function (v) {
            this._DireccionM = v;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
