//Exportamos y creamos la clase Teléfono.
export class Telefono {

// Creamos los Atributos de la clase Teléfono.
    private _Tipo : string;
// Luego, creamos los metodos Getter y Setters de todos los Atributos.
    public get Tipo() : string {
        return this._Tipo;
    }
    public set Tipo(v : string) {
        this._Tipo = v;
    }
    

    private _Numero : number;
    public get Numero() : number {
        return this._Numero;
    }
    public set Numero(v : number) {
        this._Numero = v;
    }
    
// Se crea el constructor de la clase Teléfono.
    constructor(Tipo: string, Numero: number){
        this._Tipo = Tipo;
        this._Numero = Numero; 
    }
     
}