let score = 33

//console.log(typeof score); //method 1
//console.log(typeof(score)); //method 2

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// if we take these values for variable,then 
// "33" => 33
// "33abc" => NaN, Not A Number
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false, for empty string
// "Shaan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);