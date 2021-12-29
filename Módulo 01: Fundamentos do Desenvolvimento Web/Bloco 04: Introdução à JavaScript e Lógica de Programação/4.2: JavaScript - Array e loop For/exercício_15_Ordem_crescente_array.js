/* 
Exercício 15
Ordene o array numbers em ordem crescente e imprima seus valores;
*/



let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let order ; 

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      order = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = order;

    }

  }
}
console.log(numbers);