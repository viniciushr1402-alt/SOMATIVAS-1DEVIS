const readline = require('readline-sync');
let soma = 0;

console.log("|---SISTEMA DE MEDIÇOES---|")
for (let i = 1; i <= 5; i++) {
  const medias = readline.questionFloat(`Informe sua medicao ${i}: `);
  soma += medias;
}
const media = soma / 5;
console.log(`Soma total das medições: ${soma}`);
console.log(`Resultado da sua media final: ${media}`);