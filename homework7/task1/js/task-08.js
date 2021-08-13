const div = document.querySelector('div#boxes');
const input = document.querySelector('input');
const create = document.querySelector('button[data-action="render"]');
const delite = document.querySelector('button[data-action="destroy"]');

create.addEventListener('click', amountDiv);
delite.addEventListener('click', destroyBoxes);


function amountDiv(){
    createBoxes(input.value)
}
function createBoxes(amount) {
    for(let i=0; i< amount; i+=1){
    div.insertAdjacentHTML('beforeend', divCreate())
    }
}

function divCreate() {
    return `<div style="background-color:blue; width: 30px; height: 30px; margin-bottom: 2px;"></div>`
}

function destroyBoxes() {
    div.textContent = ''
}