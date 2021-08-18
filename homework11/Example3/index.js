class CountdownTimer {
    constructor(value) {
        this.targetDate = value.targetDate;
        this.selector = value.selector;
    }
    timer() {
        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = this.targetDate.getTime() - currentTime;
            const date = new Date(deltaTime)
            timerInHtml(date)
        }, 1000)
    }
}

const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}

function timerInHtml(date) {
    const days = pad(Math.floor(date / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((date % (1000 * 60)) / 1000));
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}
function pad(value) {
    return String(value).padStart(2, 0)
}

const timerId1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 19, 2022'),
});

timerId1.timer()