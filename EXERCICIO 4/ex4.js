const readline = require('readline-sync');

const temperatura = readline.questionFloat('Informe a temperatura da maquina (em C): ');
console.log(`Temperatura: ${temperatura}°C`);

if (temperatura <= 60) {
  console.log('Situação: NORMAL');
} else if (temperatura <= 80) {
  console.log('Situação: ATENÇÃO');
} else {
  console.log('Situação: CRÍTICA');
}