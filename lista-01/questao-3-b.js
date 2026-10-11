function produtorio(...numeros) {
  let resultado = 1;

  for (let i = 0; i < numeros.length; i++) {
    resultado = resultado * numeros[i];
  }

  return resultado;
}

console.log(produtorio(2, 3, 4));
console.log(produtorio(1, 2, 3, 4, 5));
