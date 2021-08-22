import debounce from 'lodash.debounce';
import listItemsCountry from './list-items.hbs';
import fetchCountries from './fetchCountries'

import { alert, defaultModules, Stack, error, success } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});
console.log(PNotifyMobile)
const stackBottomModal = new Stack({
    dir1: 'up',
});


const refs = {
    input: document.querySelector('#input'),
    list: document.querySelector('#list')
}

refs.input.addEventListener('input', debounce(inputValue, 500))

function inputValue(e) {
    const countryValue = e.target.value;
    if (!countryValue) {
        error({
            stack: stackBottomModal,
            title: 'Stickyish Error',
            text: 'Check me out! I\'m a Stickyish error. I won\'t hide automatically, but I\'ll close with everyone else when you click the modal backdrop.',
            hide: true
        });
        return refs.list.textContent = ''
    };
    fetchCountries(countryValue).then(res => {
        refs.list.insertAdjacentHTML('beforeend', listItemsCountry(res))
        if (refs.list.children.length == 1) {
            const img = document.createElement('img');
            const a = res.map(i => i.flag)
            img.src = a
            img.width = '300'
            refs.list.append(img)
            success({
                stack: stackBottomModal,
                title: 'Sticky Success',
                text: 'Sticky success... I\'m not even gonna make a joke.',
                hide: true
            });
        }
        console.log(res)
    }).then(refs.list.textContent = '')
}
