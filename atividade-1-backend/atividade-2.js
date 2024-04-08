/**
 * 2. Escreva um script para ler o número total de eleitores de um município, o número de votos
 *brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação
 *ao total de eleitores
 */
const prompt = require("prompt-sync")();

var NumbEleitores = Number(prompt("Tota de eleitores da cidade: "));
var nulos = Number(prompt("Numero de votos nulos: "));
var brancos = Number(prompt("Numero de votos brancos: "));
var validos = Number(prompt("Numero de votos validos: "));


var PercBrancos = (brancos * 100) / NumbEleitores ;
var PercNulos = (nulos * 100) / NumbEleitores;
var PercValidos = (validos * 100) / NumbEleitores;

console.log(`O percentual de votos validos ${PercValidos}%, de votos brancos é ${PercBrancos30}% e de votos nulos ${PercNulos}%`);
