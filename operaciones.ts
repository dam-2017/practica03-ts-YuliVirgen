

export class Operaciones{
    num1: number;
    num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
        
    }

//SUMAR

    get suma():number{
        return this.num1+this.num2;

//RESTAR
    }
    get resta():number{
        return this.num1-this.num2;

    }
//FACTORIAL
    public factorial(n: number){
            if (n == 0 || n == 1){
                return 1;
            }else {
               return n*this.factorial(n-1); 
            }
        }
//PRIMO
    get primo():string{
        var i = 1;
        while(i<this.num1){
            if(this.num1 % i == 0 && i!=1){
                return "No es  Primo"
            }
            i++;
        }
        return "Es Primo";
    }
    
}