//importamos las clases Mail, Teléfono y Dirección
import {Mail} from "./Mail";
import {Telefono} from "./Telefono";
import {Direccion} from "./direccion";


// Exportamos y creamos la clase Persona.
    export class Persona {


// Creamos todo los Atributos de la clase Persona.        
        private _Nombre : string;
// Luego, creamos los metodos Getter y Setters de todos los Atributos.       
        public get Nombre() : string {
            return this._Nombre;
        }
        public set Nombre(v : string) {
            this._Nombre = v;
        }
        

        private _Apellidos : string;
        public get Apellidos() : string {
            return this._Apellidos;
        }
        public set Apellidos(v : string) {
            this._Apellidos = v;
        }
        
        
        private _Edad : number;
        public get Edad() : number {
            return this._Edad;
        }
        public set Edad(v : number) {
            this._Edad = v;
        }
        
        
        private _DNI : string;
        public get DNI() : string{
            return this._DNI;
        }

        
        private _Cumpleaños : number | String;
        public get Cumpleaños() : number | String {
            return this._Cumpleaños;
        }
        
        
        private _Color_Favorito : string;
        public get Color_Favorito() : string {
            return this._Color_Favorito;
        }
        public set Color_Favorito(v : string) {
            this._Color_Favorito = v;
        }
        

        private _Sexo : string;
        public get Sexo() : string {
            return this._Sexo;
        }
        public set Sexo(v : string) {
            this._Sexo = v;
        }
        

        private _Direcciones : Direccion[];
        public get Direcciones() : Direccion[] {
            return this._Direcciones;
        }
        public set Direcciones(v : Direccion[]) {
            this._Direcciones = v;
        }
        
        
        private _Mails : Mail[];
        public get Mails() : Mail[] {
            return this._Mails;
        }
        public set Mail(v : Mail[]) {
            this._Mails = v;
        }
        
        
        private _Telefonos : Telefono[];
        public get Telefonos() : Telefono[] {
            return this._Telefonos;
        }
        public set Telefono(v : Telefono[]) {
            this._Telefonos = v;
        }

        
        private _Notas : number;
        public get Notas() : number {
            return this._Notas;
        }
        public set Notas(v : number) {
            this._Notas = v;
        }
        
// Se crea el constructor de la clase Persona.
        constructor(Nombre:string, Apellidos:string, Edad:number, DNI:string, Cumpleaños:number | String, Color_Favorito:string, Sexo:string, Direcciones:Direccion[], Mails:Mail[], Telefonos:Telefono[], Notas:number) {
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


// Creamos un método para buscar personas por DNI.
        buscarPorDni(dniP: string): Persona | undefined {
            if (this._DNI === dniP) {
              return this;
            }
            return undefined;
          }
  }

  