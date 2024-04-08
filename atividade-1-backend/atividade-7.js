//7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
const prompt = require('prompt-sync')();

var notaA = parseFloat(prompt("Digite a primeira nota nota: "));

var notaB = parseFloat(prompt("Digite a seguda nota: "));

var Ponderada = (notaA * 4 + notaB * 6) / (4 + 6);

console.log("A média ponderada é: " + Ponderada);