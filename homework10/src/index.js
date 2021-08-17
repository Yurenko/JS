import './styles.css';
import './images/sprite.svg'
import card from './menu.json';
import cardInformation from './template/list.hbs';

const refs = {
    menu: document.querySelector('.js-menu'),
    toggleTheme: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
}
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.toggleTheme.addEventListener('change', changeTheme);
let theme = localStorage.getItem('Theme')
if (theme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.toggleTheme.checked = true;
} else {
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('Theme', refs.body.classList)
}

function changeTheme() {
    let changeThemeBtn = localStorage.getItem('Theme')
    if (Theme.LIGHT === changeThemeBtn) {
        refs.body.classList.remove(Theme.LIGHT)
        refs.body.classList.add(Theme.DARK)
        return localStorage.setItem('Theme', refs.body.classList)
    };
    refs.body.classList.remove(Theme.DARK)
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('Theme', refs.body.classList)

}

listItems()
function listItems() {
    const massiv = card.map(item => cardInformation(item)).join('');
    refs.menu.insertAdjacentHTML('beforeend', massiv)
}
