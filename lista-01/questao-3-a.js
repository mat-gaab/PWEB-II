function calcular(a, b, operacao) {
  if (operacao == "+") {
    return a + b;
  } else if (operacao == "-") {
    return a - b;
  } else if (operacao == "*") {
    return a * b;
  } else if (operacao == "/") {
    return a / b;
  } else {
    return "Operação inválida";
  }
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
