//2. Utilizando o FOR, faça um algoritmo que receba 5 números e conte quantos estão entre o intervalo dos números 1 - 10.


var numero 
var intervalo = 0 

for( var contador = 0; contador < 5; contador++){
    numero = parseInt(prompt(" insira um numero "))
    if (numero >= 1 && numero <= 10){
        intervalo++
    }
}
console.log(intervalo + " numeros inserido esta entre o intervalo de  1 ao 10")