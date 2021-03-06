const formatString = function (string) {
    let sumbols = string.split('');
    if (sumbols.length < 40) return string;
    sumbols.splice(40, sumbols.length, '...');
    let newSumbols = sumbols.join('')
    return newSumbols
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
  // вернется форматированная строка