const input = document.querySelector('input');

input.addEventListener('input', sumbols)


function sumbols(event) {
    const leng = input.getAttribute('data-length');
    if (event.currentTarget.value.length == leng) {
        focusInput()
    } else {
        blurInput()

    }
}
function focusInput() {
    input.classList.remove('invalid')
    input.classList.add('valid')
}
function blurInput() {
    input.classList.remove('valid')
    input.classList.add('invalid')
}