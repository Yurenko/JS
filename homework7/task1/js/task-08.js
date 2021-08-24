const divBoxes = document.querySelector('div#boxes');
const input = document.querySelector('input');
const create = document.querySelector('button[data-action="render"]');
const delite = document.querySelector('button[data-action="destroy"]');

create.addEventListener('click', amountDiv);
delite.addEventListener('click', destroyBoxes);


function amountDiv() {
    createBoxes(input.value)
}
function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.backgroundColor = randomRGB();
        div.style.marginBottom = 20 + 'px';
        div.style.width = 30 + [i] * 5 + 'px';
        div.style.height = 30 + [i] * 5 + 'px';
        divBoxes.append(div)
    }
}

function destroyBoxes() {
    divBoxes.innerHTML = ''
}

function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb
}