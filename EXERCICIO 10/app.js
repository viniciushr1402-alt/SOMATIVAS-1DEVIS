function calcularmaodeobra(horas) {
  return horas * 80;
}
function calcularTotal(valorPecas, horas) {
  return valorPecas + calcularmaodeobra(horas);
}

function verificargarantia(meses) {
  if (meses <= 6) {
    return "EM GARANTIA";
  } else {
    return "FORA DA GARANTIA";
  }
}
module.exports = {
  calcularmaodeobra,
  calcularTotal,
  verificargarantia
};