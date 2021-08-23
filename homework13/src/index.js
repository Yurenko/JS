import debounce from 'lodash.debounce';
import card from './card-item.hbs';
import seatings from './servises/fetchImg';
import './styles.css'

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import {  error, success } from '@pnotify/core/dist/PNotify.js';

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('.learn')

input.addEventListener('input', debounce(addCard, 500));
button.addEventListener('click', loadMore)

function addCard(e) {
    seatings.query = e.target.value;
    if (seatings.query.length > 0) {

        return seatings.fetchCountries().then(res => res.map(item => card(item)).join(''))
            .then(res => setItemsCard(res)).then(
                ul.innerHTML = '',
                success({
                    title: 'Sticky Success',
                    text: 'Sticky success... I\'m not even gonna make a joke.',
                    hide: true
                })).catch(console.error)
    } else {
        ul.innerHTML = ''
        error({
            title: 'Uh Oh!',
            text: 'Something really terrible happened.',
            hide: true
        });
    }

}

function setItemsCard(items) {
    ul.insertAdjacentHTML('beforeend', items)
}

function loadMore() {
    return seatings.fetchCountries().then(res => res.map(item => card(item)).join(''))
        .then(res => setItemsCard(res)).then(success({
            text: 'Good'
        })).catch(console.error)
}