const country = prompt('Введіть країну').toLowerCase();
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

switch (country) {
    case 'китай':
        alert(`Доставка в ${country} буде коштувати ${china} кредитів`)
        break
    case 'чилі':
        alert(`Доставка в ${country} буде коштувати ${chile} кредитів`)
        break
    case 'австралія':
        alert(`Доставка в ${country} буде коштувати ${australia} кредитів`)
        break
    case 'індія':
        alert(`Доставка в ${country} буде коштувати ${india} кредитів`)
        break
    case 'ямайка':
        alert(`Доставка в ${country} буде коштувати ${jamaica} кредитів`)
        break
    default:
        alert('У вашій країні доставка недоступна')
}