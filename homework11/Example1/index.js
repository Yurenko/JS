const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const timerColor = {
    isColor: false,
    changeColor() {
        if (this.isColor) return;
        this.isColor = true;
        this.timerId = setInterval(() => {
            console.log('1')
            let randomNamber = randomIntegerFromInterval(0, 5);
            refs.body.style.backgroundColor = colors[randomNamber]
        }, 1000)
    },
    stopColor() {
        this.isColor = false;
        clearInterval(this.timerId)
    }
}

refs.startBtn.addEventListener('click', timerColor.changeColor.bind(this));
refs.stopBtn.addEventListener('click', timerColor.stopColor.bind(this));

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
