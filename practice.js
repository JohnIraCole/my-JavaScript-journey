

// <--Objects-->

/*const object1 = {
    apples: 1,
    bananas: 3,
    'mangos': 5,
    grapes : 0,
    pineapple: 7,
    orange: 2,
    method1: function test(){
        console.log('Testing');        
    },
    method2() {
        console.log('Test2');
    }
};

const object2 = object1;

const {pineapple,orange} = object2;

const reverse = (JSON.stringify(object1));
console.log(JSON.parse(reverse));
console.log(`Quantity of apples: ${object1.apples}`);
console.log(`Quantity of bananas: ${object1.bananas}`);
console.log(`Quantity of mangos: ${object1['mangos']}`);
console.log(`Quantity of grapes: ${object2.grapes}`);
console.log(`Quantity of pineapples: ${pineapple}`);
console.log(`Quantity of oranges: ${orange}`);
object1.method1();
object1.method2();
*/

// <--Objects-->

const product = {
    basketball: 2095,
    volleyball: 25,
    'deliverTime' : '1 day',
    comparePrice(product1,product2){
        if(this.basketball < this.volleyball){
            console.log(`${this.basketball} is found to be the lowest price`);
        }
        else{
            console.log(`${this.volleyball} is found to be the lowest price`)
        }
    },
    
};

console.log(product.basketball + 500);
console.log(product['deliverTime']);
product.comparePrice(product.basketball,product.volleyball);

const message = 'test';

const convertMessage = message.toUpperCase();
const repeatMessage = convertMessage.repeat(2);
console.log(repeatMessage);

const {basketball,volleyball} = product;

console.log(basketball);


const bas = {
    basket: 205
};

const bus = {
    ball: 45
};

function compareV2(bus,bas){
    if(bas.basket < bus.ball){
        console.log(bas);
    }
    else{
        console.log(bus);
    }
}
function isSamePrice(bus,bas){
    if(bas.basket === bus.ball){
        return true;
    }
    else{
        return false;
    }
}

compareV2(bus,bas);
console.log(isSamePrice(bus,bas));
