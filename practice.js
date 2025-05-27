
const products = {
    apples: 1,
    bananas: 3,
    'mangos': 5
};

const reverse = (JSON.stringify(products));

console.log(JSON.parse(reverse));