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
        amount: 301,
    }
];

function profileMagazine(label, schedule, products, description, startSaleDate, team) {
    return {
        label,
        schedule,
        products,
        description,
        team,
        startSaleDate,
        makeBlackFriday(discount) {
            if (discount <= 0 || discount >= 1) return null

            this.products.forEach(product => {
                product.price = product.price - (product.price * discount);
            });
        },
        verifySore(store) {
            let mismatchProducts = '';

            this.products.forEach(shopProduct => {
                const storeProduct = store.find(product => product.productID === shopProduct.productID);

                if (storeProduct.amount !== shopProduct.amount) {
                    mismatchProducts += ` ${storeProduct.title}`;
                    shopProduct.amount = storeProduct.amount;
                }
            })

            return mismatchProducts;
        },
        ellipsisText(text, maxLength) {
            if (text.length > maxLength) {
                return `${text.slice(0, maxLength)}...`
            }
            return text
        },
        censorshipCheck(advertisement, forbiddenWord) {
            const arrAdvertisement = advertisement.split(' ');
            const isForbiddenWord = arrAdvertisement.find(word => {
                return word.toLowerCase() === forbiddenWord.toLowerCase()
            });

            if (isForbiddenWord) {
                const goodAdvertisement = arrAdvertisement.filter(word => word.toLowerCase() !== forbiddenWord.toLowerCase())
                return goodAdvertisement.join(' ');
            } else {
                return advertisement
            }
        },
        checkDayToSale(startSaleDate) {
            const startSaleDateISO = startSaleDate.split('.').reverse().join('-');
            const startSaleDateMs = Date.parse(startSaleDateISO);

            if (startSaleDateMs < Date.now()) {
                console.error('Date is not valid');
                return null
            } else {
                return Math.ceil(Math.abs( Date.now() - startSaleDateMs) / (1000 * 3600 * 24))
            }
        },
        prepareInventory() {
            const allAmount = this.products.reduce((acc, currentProduct) => {
                return acc + currentProduct.amount
            }, 0);
            const preparedAmount = (this.team * 10) * this.checkDayToSale(this.startSaleDate);
            return preparedAmount >= allAmount;
        }
    }
}

const zerno = profileMagazine(
    'zerno',
    'mon-sun: 10am - 10pm',
    magazineProducts,
    'The best clothes magazine!',
    '22.07.2022',
    10
);

zerno.ellipsisText('The best clothes magazine!', 16);
zerno.censorshipCheck('my shop is the best fuck of all Fuck', 'fuck');
zerno.checkDayToSale('16.07.2022');
zerno.prepareInventory();