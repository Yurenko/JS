const input = document.querySelector('input#name-input');
let output = document.querySelector('span#name-output');

input.addEventListener('input', textDecoration)

function textDecoration(event) {
    if (event.currentTarget.value === '') return output.textContent = 'незнакомец';
    output.textContent = event.currentTarget.value
}