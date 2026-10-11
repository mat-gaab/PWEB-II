let reais = Number(prompt("Digite o valor em R$:"));
let cotacao = Number(prompt("Digite a cotação atual do dólar:"));

let dolares = reais / cotacao;

console.log("Valor em US$: " + dolares.toFixed(2));
