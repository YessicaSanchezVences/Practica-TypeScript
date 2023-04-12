//Exportamos y creamos la clase Dirección.
export class Direccion {

// Creamos todos los Atributos de la clase Dirección.
    private _Calle : string;
// Luego, creamos los metodos Getter y Setters de todos los Atributos.  
    public get Calle() : string {
        return this._Calle;
    }
    public set Calle(v : string) {
        this._Calle = v;
    }
    
    
    private _Numero : number;
    public get Numero() : number {
        return this._Numero;
    }
    public set Numero(v : number) {
        this._Numero = v;
    }
    
    
    private _Piso : number;
    public get Piso() : number {
        return this._Piso;
    }
    public set Piso(v : number) {
        this._Piso = v;
    }
    
    
    private _letra : string;
    public get letra() : string {
        return this._letra;
    }
    public set letra(v : string) {
        this._letra = v;
    }
    
    
    private _Codigo_Postal : number;
    public get Codigo_Postal() : number {
        return this._Codigo_Postal;
    }
    public set Codigo_Postal(v : number) {
        this._Codigo_Postal = v;
    }
    

    private _Poblacion : string;
    public get Poblacion() : string {
        return this._Poblacion;
    }
    public set Población(v : string) {
        this._Poblacion = v;
    }

    
    private _Provincia : string;
    public get Provincia() : string {
        return this._Provincia;
    }
    public set Provincia(v : string) {
        this._Provincia = v;
    }
    
// Se crea el constructor de la clase Dirección.
    constructor(Calle: string, Numero: number, Piso: number, letra: string, Codigo_Postal: number, Poblacion: string, Provincia: string){
        this._Calle= Calle;
        this._Numero= Numero; 
        this._Piso= Piso;
        this._letra= letra;
        this._Codigo_Postal= Codigo_Postal;
        this._Poblacion= Poblacion;
        this._Provincia= Provincia;
    }
}