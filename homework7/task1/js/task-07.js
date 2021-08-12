const range = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');

range.addEventListener('input', overSize)

function overSize(event){
    let currentValue = event.currentTarget.value;
    span.style.fontSize = currentValue +'px'
}