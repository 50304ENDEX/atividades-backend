/*
8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura.
*/
const prompt = require('prompt-sync')();

var altura = parseFloat(prompt("Digite a altura do cilindro: "));
var raio = parseFloat(prompt("Digite o raio do cilindro: "));
var volume = (Math.PI)*(raio**2)*altura;
console.log(volume);