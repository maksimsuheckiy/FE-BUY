// Task-01

const burger = document.querySelector('.burger');

const toggleMenu = () => {
    const burgerMenu = document.querySelector('.menu');

    burger.classList.toggle('burger--active');
    burgerMenu.classList.toggle('menu--active');
}

burger.addEventListener('click', toggleMenu);

// Task-02

const pointerMoves = (event) => {
    const rootCursor = document.querySelector('.root-cursor');

    rootCursor.style.left = `${event.clientX}px`;
    rootCursor.style.top = `${event.clientY}px`;
}

document.addEventListener('pointermove', (event) => {
    pointerMoves(event)
})

// Task-03

const checkSymbol = (event) => {
    const keyboard = document.querySelectorAll('.keyboard ul');
    const title = document.querySelector('.title');
    const value = event.key.toUpperCase();

    keyboard.forEach(keyboardRow => {
        Array.from(keyboardRow.children).forEach(keyboardBtn => {
            if (value === keyboardBtn.textContent) {
                keyboardBtn.classList.add('hit');
            }
        })
    });

    title.textContent += value;
}

document.addEventListener('keydown', (event) => {
    checkSymbol(event)
});

// Task-04

const filterClothes = (filterValue) => {
    const stock = document.querySelectorAll('.list__item');
    const inputFilter = document.querySelector('.field');
    const error = document.querySelector('.error');

    if (!filterValue) {
        const errorLabel = document.createElement('span');
        errorLabel.textContent = 'Такого кольору немає в асортименті';
        errorLabel.classList.add('error');
        if (!error) inputFilter.after(errorLabel);
    } else {
        error?.remove();
        stock.forEach(product => {
            const color = product.textContent.split(':')[1].trim();

            if (color !== filterValue) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        })
    }
}

document.getElementById("filterBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const valueField = document.querySelector(".field").value;
    filterClothes(valueField);
});