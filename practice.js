
let name = '';

function greet(){

    let nameCall;

    nameCall = name ? (`Hello ${name}`) : (`Hello there!`);

    console.log(nameCall);

    return nameCall;
}

let celsius = 0;
let fahrenheit = 0;

function convertFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}
function convertCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius);
    return celsius;
}
function convertTemperature(degree,unit){
    let outPut = '';
    if(unit === 'C'){
        outPut = convertFahrenheit(degree);
        console.log(outPut + unit);
    }
    else if(unit === 'F'){
        outPut = convertCelsius(degree);
        console.log(outPut + unit);    
    }
    else{
        outPut = console.log('Please enter valid unit');
    }
    return outPut;
}
greet();
convertFahrenheit(25);
convertCelsius(86);
convertTemperature(86,'F');

function convertLenght(lenght,from,to){
    let res;

    if(from === to){
        console.log(`${lenght}`);
    }
    else if(from === 'Km' && to === 'Miles'){
        res = lenght * 0.621371;
        res = Math.round(res);
        console.log(`${res} ${to}`);
    }
    else if(from === 'Miles' && to === 'Km'){
        res = lenght * 1.6;
       
        console.log(`${res} ${to}`);
    }
    else if(to === 'ft'){
        if(from === 'Miles'){
            outPut = lenght * 5280;
            console.log(`${outPut} ${to}`); 
        }
        else if(from === 'Km'){
            outPut = lenght * 3281;
            console.log(`${outPut} ${to}`); 
        }
    }
    else{
        res = console.log('Invalid Unit');
    }
    return res;
}

convertLenght(5,'Miles','Km');