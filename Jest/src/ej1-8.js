 
let cart = [];
 
const item1 = {
    name: "item1",
    price: 0,
}

const item2 = {
    name: "item2",
    price: 0,
}

const item3 = {
    name: "item3",
    price: 0,
}

const setPrice = (item, price) => {

    return Object.assign({}, item, {price});

};

const addToCart = (cart, item) => {

    return [...cart, item];
};

/*cart = addToCart(cart, setPrice(item1, 80));
cart = addToCart(cart, setPrice(item2, 120));
cart = addToCart(cart, setPrice(item3, 300));*/

module.exports = { setPrice, addToCart };