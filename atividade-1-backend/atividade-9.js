//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
const prompt =require('prompt-sync')();

var NumA = Number(prompt("digite um numero: "));
var NumB = Number(prompt("digite outro numero: "));
var Result = (NumA + NumB) * NumA;

console.log(Result);