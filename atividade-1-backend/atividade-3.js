/*
*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste.
*Calcular e escrever o valor do novo salário.
*/

const prompt = require('prompt-sync')();

var salario = Number(prompt("O salario em R$ "));
var porcent = parseFloat(prompt("A percentual de reajuste: "));

var porcentagem = salario*(porcent / 100);

var soma = porcentagem + salario;

console.log(`Salario com o reajuste do salario ${soma}`);