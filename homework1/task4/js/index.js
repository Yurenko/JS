const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Введіть кількість штук');

if (!quantity) {
    console.log('Скасовано користувачем!')
} else {
    const totalPrice = pricePerDroid * Number(quantity)
    if(credits<totalPrice){
        console.log('Недостатньо коштів на рахунку!')
    } else {
        const rest = credits - totalPrice
        console.log(`Ви купили ${quantity} дроїдів, на рахунку залишилося ${rest} кредитів.`)
    }
}