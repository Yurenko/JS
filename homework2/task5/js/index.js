const checkForSpam = function (message) {
    
    const words = message.split(' ');
    console.log(words)
    let res = words.includes('spam') || words.includes('sale')
    return res
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true