"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(palabra) {
        this.palabra = palabra;
    }
    Object.defineProperty(Cadena.prototype, "palindromo", {
        //primer metodo palindromo
        get: function () {
            //reverse solo se aplica a arreglos
            if (this.palabra == this.palabra.split("").reverse().join(""))
                return "Es palindromo";
            else
                return "No es palindromo";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contadorVocales", {
        //CONTAR VOCALES
        get: function () {
            //declarar contador
            var contador = 0;
            //console.log(this.palabra.split(""));
            var arregloVocales = this.palabra.split("");
            //declara letra y recorre todo el arreglo
            //toLowerCase para mayusculas
            for (var _i = 0, arregloVocales_1 = arregloVocales; _i < arregloVocales_1.length; _i++) {
                var letra = arregloVocales_1[_i];
                if (letra.toLowerCase() == "a" || letra.toLowerCase() == "e" ||
                    letra.toLowerCase() == "i" || letra.toLowerCase() == "o" || letra.toLowerCase() == "u")
                    contador++;
            }
            return contador;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contarLetras", {
        //CONTADOR LETRAS
        //trim eliminar espacios y length para la longitud de la Cadena
        get: function () {
            return this.palabra.trim().length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contarPalabra", {
        //CONTADOR PALABRAS
        get: function () {
            return this.palabra.split(" ").length;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
