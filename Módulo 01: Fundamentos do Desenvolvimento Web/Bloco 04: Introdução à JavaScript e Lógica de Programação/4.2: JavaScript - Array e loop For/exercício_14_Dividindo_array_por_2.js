/* 
Exercício 14
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let array = [];

for (let num = 1; num < 26; num += 1) {
  array.push(num);
}

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
};


