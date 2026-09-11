let readline = require('readline-sync');
let funcoes = require('./app.js');

let maquina = readline.question("Nome da maquina: ");
let valorPecas = readline.questionFloat("Valor das pecas: ");
let horas = readline.questionFloat("Horas de servico: ");
let meses = readline.questionInt("Meses desde a ultima manutencao: ");

let maodeO = funcoes.calcularmaodeobra(horas);
let total = funcoes.calcularTotal(valorPecas, horas);
let garantia = funcoes.verificarGarantia(meses);

console.log("Maquina: " + maquina);
console.log("Mao de obra: R$ " + maodeO);
console.log("Pecas: R$ " + valorPecas);
console.log("Total: R$ " + total);
console.log("Situacao da garantia: " + garantia);