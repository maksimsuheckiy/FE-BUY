// Task-01

function without(object, propertyName) {
    return {
        ...object,
        [propertyName]: null,
    }
}

const data = {login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev'};
without(data, 'address');

// Task-02

function profileMagazine(label, schedule, products) {
    return {
        label,
        schedule,
        products,
        makeBlackFriday: function(discount) {
            if (discount <= 0 || discount >= 1) return null

            this.products.map(product => {
                product.price = product.price - (product.price * discount);
            });
        },
        verifySore: function (store) {
            const mismatchProducts = [];

            this.products.map((shopProduct, shopProductIndex) => {
                const storeProduct = store.find((product, index) => index === shopProductIndex);

                if (storeProduct.amount !== shopProduct.amount) {
                    mismatchProducts.push(storeProduct.title);
                    shopProduct.amount = storeProduct.amount;
                }
            })

            return mismatchProducts.join(', ');
        }
    }
}

const magazineProducts = [
    {
        title: 't-shirt',
        price: 3400,
        amount: 100,
    },
    {
        title: 'Jacket-shirt',
        price: 800,
        amount: 100,
    },
    {
        title: 'dress-seater',
        price: 2000,
        amount: 100,
    },
    {
        title: 'jumper',
        price: 500,
        amount: 100,
    },
    {
        title: 'cardigan',
        price: 1000,
        amount: 100,
    },
    {
        title: 'demi-season jacket',
        price: 1500,
        amount: 100,
    },
    {
        title: 'top',
        price: 300,
        amount: 500,
    }
];
const storeProducts = [
    {
        title: 't-shirt',
        price: 3400,
        amount: 100,
    },
    {
        title: 'Jacket-shirt',
        price: 800,
        amount: 100,
    },
    {
        title: 'dress-seater',
        price: 2000,
        amount: 100,
    },
    {
        title: 'jumper',
        price: 500,
        amount: 100,
    },
    {
        title: 'cardigan',
        price: 1000,
        amount: 100,
    },
    {
        title: 'demi-season jacket',
        price: 1500,
        amount: 100,
    },
    {
        title: 'top',
        price: 300,
        amount: 500,
    }
];
const magazine = profileMagazine('zara', 'пн-вс: 10:00-22:00', magazineProducts);

magazine.makeBlackFriday(0.5);
magazine.verifySore(storeProducts);