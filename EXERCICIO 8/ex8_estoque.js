const readline = require('readline-sync');

const estoque = [];

for (let i = 0; i < 3; i++) {
  console.log(`CADASTRO VIRTUAL${i + 1}:`);
  const nome = readline.question('Item: ');
  const quantidade = readline.questionInt('Qtd: ');
  const estoqueminimo = readline.questionInt('Minimo: ');
  estoque.push({ nome, quantidade, estoqueminimo });
}
console.log('\n--- RELATORIO ---');
for (let i = 0; i < estoque.length; i++) {
  const item = estoque[i];
  let status = 'ESTOQUE ok';

  if (item.quantidade < item.estoqueminimo) {
    status = 'REPOR ESTOQUE';
  }

  console.log(`${item.nome} - Quantidade: ${item.quantidade} - Minimo: ${item.estoqueminimo} e ${status}`);
}