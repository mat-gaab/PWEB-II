let n = Number(prompt("Quantos números você quer digitar?"));
let soma = 0;

for (let i = 0; i < n; i++) {
  let numero = Number(prompt("Digite um número inteiro positivo:"));
  let primo = true;

  if (numero < 2) {
    primo = false;
  }

  for (let j = 2; j < numero; j++) {
    if (numero % j == 0) {
      primo = false;
    }
  }

  if (primo == true) {
    soma = soma + numero;
  }
}

console.log("A soma dos números primos é: " + soma);
