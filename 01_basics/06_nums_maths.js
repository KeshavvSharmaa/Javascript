const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // Shows after decimal values till 2 i.e 100.00

const otherNumber = 42.9517
//console.log(otherNumber.toPrecision(3)); // round off the value after decimal and make prior before decimal values i.e 23.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); 

// ******************************* Maths *****************************************

// console.log(Math);
// console.log(Math.abs(-4)); //absolute value (makes values positive)
// console.log(Math.round(4.3)); //rounds off the values i.e 4
// console.log(Math.ceil(4.7)); //gives ceiling value i.e 4
// console.log(Math.floor(4.7)) //gives floor value i.e 5
// console.log(Math.min(4, 3, 6, 8));//checks min value from the array
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //gives decimal value between 0 and 1
console.log((Math.random()*10)+ 1);
console.log(Math.floor(Math.random()*10)+ 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);