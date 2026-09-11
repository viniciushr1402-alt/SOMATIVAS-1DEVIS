
const readline = require('readline-sync');

console.log("---Bem vindo a Nossa Loja Virtual---") 
const materia = readline.question(' Insira o nome do material: ');
const quantidade = readline.questionFloat(' Qual a quantidade comprada: ');
const preco = readline.questionFloat('Preco unitario (R$): ');

const Total = quantidade * preco;

console.log("---Os dados da sua compra, Confira abaixo!---")
console.log(`Material: ${materia}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço Unitário: R$ ${preco.toFixed(2)}`);
console.log(`Valor Total: R$ ${Total.toFixed(2)}`);