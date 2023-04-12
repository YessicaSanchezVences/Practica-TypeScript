//Exportamos y creamos la clase Mail.
export class Mail {
 
// Creamos los Atributos de la clase Mail.    
    private _Tipo : string;
// Luego, creamos los metodos Getter y Setters de todos los Atributos.
    public get Tipo() : string {
        return this._Tipo;
    }
    public set Tipo(v : string) {
        this._Tipo = v;
    }
    
   
   private _DireccionM : string | number;
   public get DireccionM() : string | number {
    return this._DireccionM;
   }
   public set DireccionM(v : string | number) {
    this._DireccionM = v;
   }
   
// Se crea el constructor de la clase Mail.
    constructor(Tipo: string, DireccionM: string | number){
        this._Tipo = Tipo;
        this._DireccionM = DireccionM; 
    }

}


