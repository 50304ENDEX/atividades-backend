/*
4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de
um carro, calcular e escrever o custo final ao consumidor.
 */

const prompt = require('prompt-sync')();

const valor_do_carro = parseFloat(prompt("valor do carro comprado: "));

let soma_imp_vend = (valor_do_carro * (28/100)) + (valor_do_carro * (45/100));

console.log(`O valor do carro sem o percentual da distribuidora e os impostos é R$ ${valor_do_carro - soma_imp_vend} `)