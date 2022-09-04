const storage = [
    {
        id: 1,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "ficus",
        description:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
    },
    {
        id: 2,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "qui esse",
        description:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ",
    },
    {
        id: 3,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "molestias",
        description:
            "et iusto sed quo iure\nvoluptatem occaecati porro eius odio et labore et velit aut",
    },
    {
        id: 4,
        imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
        title: "occaecati",
        description:
            "ullam et saepe reiciendis voluptatem doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
        id: 5,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "nesciunt",
        description:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
        id: 6,
        imgUrl:
            "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
        title: "dolorem",
        description:
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis",
    },
    {
        id: 7,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "autem",
        description: "dolore placeat quibusdam ea quo vitaea sed quas",
    },
    {
        id: 8,
        imgUrl:
            "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
        title: "dolorem",
        description: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam",
    },
    {
        id: 9,
        imgUrl:
            "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
        title: "tempora",
        description: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam",
    },
    {
        id: 10,
        imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
        title: "molestias",
        description:
            "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero",
    },
];

const addProduct = (event) => {
    const cardID = event.target.parentElement.dataset.card;
    const currentProduct = storage.find(product => product.id === +cardID);
    const basket = JSON.parse(localStorage.getItem('basket'));

    if (basket) {
        const isBasketProduct = basket.find(product => product.id === +cardID);
        if (!isBasketProduct) {
            localStorage.setItem('basket', JSON.stringify([...basket, currentProduct]));
        }
    } else {
        localStorage.setItem('basket', JSON.stringify([currentProduct]));
    }
}

const renderStorage = (storage) => {
    const root = document.getElementById('root_storage');
    const basket = JSON.parse(localStorage.getItem('basket'));

    (basket ? basket : storage).forEach(product => {
        root.insertAdjacentHTML('beforeend', `
            <div class="card" data-card="${product.id}">
                <img src="${product.imgUrl}" alt="" class="card__img">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <button class="card__btn">Add to Cart</button>
            </div>
        `)
    })
}

renderStorage(storage);

document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.card__btn');

    productButtons.forEach(btn => {
        btn.addEventListener('click', event => addProduct(event));
    });
});