/*
1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética
das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado
para média inferior a 7.0.
*/

const prompt = require('prompt-sync')();

const Nota1 = parseFloat(prompt("Nota 1: "));
const Nota2 = parseFloat(prompt("Nota 2: "));
const Nota3 = parseFloat(prompt("Nota 3: "));
const Nota4 = parseFloat(prompt("Nota 4: "));

var mediarit = (Nota1 + Nota2 + Nota3 + Nota4)/4 ;

if(mediarit >= 7){
    console.log(`Parabens! Foi aprovado com a nota ${mediarit}`);
}
else{
    console.log(`Parabens!! Foi reprovado,  sua nota foi ${mediarit} `);
}

console.log(`A media aritimetica das quatro notas é: ${mediarit}`);
