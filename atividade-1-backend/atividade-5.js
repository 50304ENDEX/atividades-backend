/*
5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o
custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular
e escrever o custo final ao consumidor
*/

const prompt = require('prompt-sync')();

let custo_fabrica = parseFloat(prompt("Custo de fabrica do carro: "));
let porcent_distrib = parseFloat(prompt("Porcentagem do distribuidor carro: "));
let porcent_imp = parseFloat(prompt("porcentagem do imposto: "));

console.log(`O valor final repassado ao cliente é R$ ${ custo_fabrica + (custo_fabrica * (porcent_distrib/100)) + (custo_fabrica * (porcent_imp/100))}`);