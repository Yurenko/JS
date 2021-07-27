let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введіть число')
    numbers.push(Number(input))
} while (input)

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i]
}
console.log(`Общая сумма чисел равна ${total}`)