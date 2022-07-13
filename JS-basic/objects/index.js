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

            this.products.forEach(product => {
                product.price = product.price - (product.price * discount);
            });
        },
        verifySore: function (store) {
            let mismatchProducts = '';

            this.products.forEach(shopProduct => {
                const storeProduct = store.find(product => product.productID === shopProduct.productID);

                if (storeProduct.amount !== shopProduct.amount) {
                    mismatchProducts += ` ${storeProduct.title}`;
                    shopProduct.amount = storeProduct.amount;
                }
            })

            return mismatchProducts;
        }
    }
}

const magazineProducts = [
    {
        productID: 1001,
        title: 't-shirt',
        price: 3400,
        amount: 100,
    },
    {
        productID: 1002,
        title: 'Jacket-shirt',
        price: 800,
        amount: 100,
    },
    {
        productID: 1003,
        title: 'dress-seater',
        price: 2000,
        amount: 100,
    },
    {
        productID: 1004,
        title: 'jumper',
        price: 500,
        amount: 100,
    },
    {
        productID: 1005,
        title: 'cardigan',
        price: 1000,
        amount: 100,
    },
    {
        productID: 1006,
        title: 'jacket',
        price: 1500,
        amount: 100,
    },
    {
        productID: 1007,
        title: 'top',
        price: 300,
        amount: 500,
    }
];
const storeProducts = [
    {
        productID: 1001,
        title: 't-shirt',
        price: 3400,
        amount: 100,
    },
    {
        productID: 1002,
        title: 'Jacket-shirt',
        price: 800,
        amount: 100,
    },
    {
        productID: 1003,
        title: 'dress-seater',
        price: 2000,
        amount: 100,
    },
    {
        productID: 1004,
        title: 'jumper',
        price: 500,
        amount: 100,
    },
    {
        productID: 1005,
        title: 'cardigan',
        price: 1000,
        amount: 300,
    },
    {
        productID: 1006,
        title: 'jacket',
        price: 1500,
        amount: 200,
    },
    {
        productID: 1007,
        title: 'top',
        price: 300,
        amount: 600,
    }
];
const zara = profileMagazine('zara', 'mon-sun: 10am - 10pm', magazineProducts);

zara.makeBlackFriday(0.5);
zara.verifySore(storeProducts);