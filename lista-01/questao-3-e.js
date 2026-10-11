function calcularTotal(valorUnitario, quantidade, desconto = 0) {
  let total = valorUnitario * quantidade;
  let valorDesconto = total * desconto / 100;

  return total - valorDesconto;
}

console.log(calcularTotal(50, 3));
console.log(calcularTotal(50, 3, 10));
