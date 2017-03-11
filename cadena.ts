export class Cadena{
    palabra: string;

    
    constructor(palabra: string)
    {
        this.palabra = palabra;
    }
    //primer metodo palindromo
    get palindromo(): string{
        //reverse solo se aplica a arreglos
    if(this.palabra==this.palabra.split("").reverse().join(""))
        return "Es palindromo";
     else 
        return "No es palindromo";
    }
//CONTAR VOCALES
    get contadorVocales(): number{
        //declarar contador
        var contador:number=0;
        //console.log(this.palabra.split(""));
        let arregloVocales:Array<string>=this.palabra.split("");
        //declara letra y recorre todo el arreglo
        //toLowerCase para mayusculas
        
        for(let letra of arregloVocales){
         if(letra.toLowerCase()=="a" || letra.toLowerCase()=="e" || 
            letra.toLowerCase()=="i" || letra.toLowerCase()=="o" || letra.toLowerCase()=="u")
            contador++;
            
        }
        return contador;
    
    }

//CONTADOR LETRAS
//trim eliminar espacios y length para la longitud de la Cadena
    get contarLetras(): number{
        return this.palabra.trim().length;
        
    }

//CONTADOR PALABRAS
get contarPalabra(): number{
        return this.palabra.split(" ").length;
        
    }
}