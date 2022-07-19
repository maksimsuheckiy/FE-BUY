const checkPercent = (fondMoney, goalMoney) => {
    const percent = fondMoney * 100 / goalMoney;
    return Math.round(percent);
}

const checkMoney = () => {
    const listItems = document.querySelectorAll('.list__item');

    listItems.forEach(item => {
        const currentItemText = item.querySelector('.list__text');
        const fondMoney = item.querySelector('.list__text .list__value');
        const goalMoney = item.querySelector('.list__goal .list__goal-value');
        const percent = checkPercent(fondMoney.textContent, goalMoney.textContent);

        if (percent <= 20) {
            currentItemText.classList.add('list__text--danger');
        } else if (percent > 20 && percent < 90) {
            currentItemText.classList.add('list__text--warning');
        } else {
            currentItemText.classList.add('list__text--success');
        }
    });
}

checkMoney();