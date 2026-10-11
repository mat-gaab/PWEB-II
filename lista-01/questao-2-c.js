let n1 = Number(prompt("Digite a nota da N1:"));
let n2 = Number(prompt("Digite a nota da N2:"));

let notaFinal = (n1 * 2 + n2 * 3) / 5;

console.log("Sua nota final é: " + notaFinal.toFixed(1));

if (notaFinal >= 7) {
  console.log("Você está aprovado!");
} else {
  console.log("Você está reprovado.");
}
