"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Object.defineProperty(Operaciones.prototype, "suma", {
        //SUMAR
        get: function () {
            return this.num1 + this.num2;
            //RESTAR
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "resta", {
        get: function () {
            return this.num1 - this.num2;
        },
        enumerable: true,
        configurable: true
    });
    //FACTORIAL
    Operaciones.prototype.factorial = function (n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        else {
            return n * this.factorial(n - 1);
        }
    };
    Object.defineProperty(Operaciones.prototype, "primo", {
        //PRIMO
        get: function () {
            var i = 1;
            while (i < this.num1) {
                if (this.num1 % i == 0 && i != 1) {
                    return "No es  Primo";
                }
                i++;
            }
            return "Es Primo";
        },
        enumerable: true,
        configurable: true
    });
    return Operaciones;
}());
exports.Operaciones = Operaciones;
