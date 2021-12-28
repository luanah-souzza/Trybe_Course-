/*
Exercício 07: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */

let nota = 49;

let notaErro = nota > 100 || nota < 0;
let notaA = nota >= 90;
let notaB = nota >= 80;
let notaC = nota >= 70;
let notaD = nota >= 60;
let notaE = nota >= 50;


if (notaErro) {
  console.log("Erro: Sua nota é menor que zero ou maior que 100!");
}
else if (notaA) {
  console.log("Seu conceito é: A!");
}
else if (notaB) {
  console.log("Seu conceito é: B!");
}
else if (notaC) {
  console.log("Seu conceito é: C!");
}
else if (notaD) {
  console.log("Seu conceito é: D!");
}
else if (notaE) {
  console.log("Seu conceito é: E!");
}
else {
  console.log("Seu conceito é: F!");
}