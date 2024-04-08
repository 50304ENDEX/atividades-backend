/*
6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o
salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/
const prompt = require('prompt-sync')();

const carro_N = parseFloat(prompt("Carros vendidos: "));
const Fixo = parseFloat(prompt("Salario fixo pago: "));
const comicao = parseFloat(prompt("valor fixo da comição: "));

let valor_carro = [];

for(i = 1; i <= carro_N; i++){
    const carros = parseFloat(prompt(`valor do carro ${i}: `))
    valor_carro.unshift(carros)
}

let soma = 0;
for(let i = 0; i < valor_carro.length; i++){
    soma += valor_carro[i];
}

const valorfinal = (comicao * carro_N) + Fixo + (soma*(5/100));

console.log(`Salario final: ${ valorfinal}`);