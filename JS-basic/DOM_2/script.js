// Task-01

const dataIceCream = [
    { name: "хрещатик", price: "7,99 uah" },
    { name: "100% пломбір", price: "2,50 uah" },
    { name: "maximus", price: "12,99 uah" },
    { name: "пташине молоко", price: "20,99 uah" },
];

const renderList = (data) => {
    const root = document.body;
    const list = document.createElement('ul');

    data?.forEach(({name, price}) => {
        list.insertAdjacentHTML("beforeend", `
            <li>
                <h2>${name}</h2>
                <p>${price}</p>
            </li>
        `)
    });

    root.append(list);
}

renderList(dataIceCream);

// Task-02

const clearLinksPage = () => {
    const links = document.querySelectorAll("a");

    links?.forEach(link => {
        if (link.getAttribute('href') === '') {
            link.remove();
        }
    })
}

clearLinksPage();

// Task-03

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
