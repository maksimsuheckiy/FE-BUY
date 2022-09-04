const timerBtn = document.getElementById('timerBtn');
const inputDate = document.querySelector('.setTimer__field');

const checkDate = (eventDate) => {
    const dateNowMill = Date.now();
    const eventDateMill = Date.parse(eventDate);
    const errorLabel = document.querySelector('.error');
    errorLabel?.remove();

    if (eventDateMill > dateNowMill) {
        return true
    } else {
        const errorEl = document.createElement('span');
        errorEl.classList.add('error');
        errorEl.textContent = 'Incorrect date';
        inputDate.after(errorEl);
    }
}

const startTimer = (eventDate) => {
    if (checkDate(eventDate)) {
        const diff = Date.parse(eventDate) - Date.now();
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        setTimeout(() => {

        }, )
    }
}

timerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    startTimer(inputDate.value)
});
