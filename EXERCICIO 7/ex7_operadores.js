const readline = require('readline-sync');

const opS = [];
console.log("--=--OPERAÇÃO VIRTUAL--=--")
for (let i = 0; i < 5;i++) 
    {
  const nome = readline.question("Digite o nome do operador ${i + 1}:");
  opS.push(nome);
}
for (let i = 0;   i < opS.length;i++) {
  console.log(`${i + 1} - ${opS[i]}`);
}