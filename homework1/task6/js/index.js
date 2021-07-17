let input;
let total = 0;
do {
    input = prompt('Введіть число')
    total = total + Number(input);
}
while (input) {
    alert(`Загальна сума чисел дорівнює ${total}`)
}
