/*
Exercício 08: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bônus: use somente um if .
 */

const num1 = 1;
const num2 = 5;
const num3 = 3;

const isEven = num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0;

if (isEven) {
  console.log(true);
}
else {
  console.log(false);
}