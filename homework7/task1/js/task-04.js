const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

let counterValue = 0;

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

function decrement() {
    counterValue = counterValue - 1;
    value.textContent = counterValue
}
function increment() {
    counterValue += 1;
    value.textContent = counterValue

}