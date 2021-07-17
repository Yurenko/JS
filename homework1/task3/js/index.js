const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('Введіть пароль');

if (!password) {
    alert('Скасовано користувачем!')
} else if (password === ADMIN_PASSWORD) {
    alert('Ласкаво просимо!')
} else {
    alert('Доступ заборонений, невірний пароль!')
}
