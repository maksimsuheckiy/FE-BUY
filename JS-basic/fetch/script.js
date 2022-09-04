const form = document.querySelector('.form');

const renderList = (data) => {
    const container = document.querySelector('.wrapper');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    data.message.forEach(url => {
       container.insertAdjacentHTML('afterbegin', `
        <div class="card">
            <img src="${url}" alt="" class="card__picture">
        </div>
       `);
    });
}

const validField = (element) => {
    const errorLabel = element.nextSibling;
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    errorLabel?.remove();
}

const invalidField = (element, errorMessage) => {
    const errorLabel = document.createElement('span');
    errorLabel.textContent = errorMessage;
    errorLabel.classList.add('error-label');

    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.after(errorLabel);
}

const isValid = (element, value) => {
    if (value === '' || value === null) {
        invalidField(element, 'This field is empty');
    } else if (value < 0) {
        invalidField(element, 'Incorrect value');
    } else {
        validField(element);
        return true
    }
}

const getData = async (count) => {
    const API = 'https://dog.ceo/api/breeds/image/random';

    return await fetch(`${API}/${count}`)
        .then(res => res.json())
        .then(data => {
            return data
        });
}

const submitForm = async (form, event) => {
    event.preventDefault();
    const countElement = form.count;
    const countValue = countElement.value;

    if (isValid(countElement, countValue)) {
        const dogs = await getData(countValue);
        renderList(dogs);
    }
}

form.addEventListener('submit', (event) => {
    submitForm(form, event);
});