const readline = require('readline-sync');

function calularefc(real, prevista) {
  return (real / prevista) * 100;
}
function clasefc(percentual) {
  if (percentual >= 90) return 'META ATINGIDA';
  if (percentual >= 70) return 'ATENÇÃO';
  return 'ABAIXO DA META';
}
const prevista = readline.questionFloat('Meta: ');
const real = readline.questionFloat('Realizado: ');
const percentual = calularefc(real, prevista);
const classificacao = clasefc(percentual);

console.log('DADOS DO RELATORIO');
console.log(`Previsão: ${prevista}`);
console.log(`Realidade: ${real}`);
console.log(`Eficiencia: ${percentual.toFixed(2)}%`);
console.log(`Status: ${classificacao}`);