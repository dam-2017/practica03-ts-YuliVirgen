import {Cadena} from './cadena';
import {Operaciones} from './operaciones';

let cadena: Cadena;
let operaciones: Operaciones;
cadena = new Cadena("hola yuli");

console.log("Esta es la clase cadena");
console.log("La palabra: ",cadena.palindromo);
console.log("Las Vocales son: ",cadena.contadorVocales);
console.log("Total de letras: ",cadena.contarLetras);
console.log("Total de Palabras: ",cadena.contarPalabra);


console.log("Esta es la clase operaciones");
operaciones = new Operaciones(3,15);

console.log("La suma es: ",operaciones.suma);
console.log("La resta es: ", operaciones.resta);
console.log("El factorial", operaciones.factorial(3));
console.log("El numero es: ",operaciones.primo);