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

// ***************** Operations **************************

let value = 3
let negValue = -value
console.log(negValue)

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 = "Keshav"

let str3 = str1 + str2 
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // if string is first, then it will print all as string i.e 122
// console.log(1 + 2 + "2") // if string is last, then it will calculate preceding i.e 32

// console.log(3 + 4 * 5 % 3) // dont't use these type of codes for arithmetic operations, always use parenthesis

// console.log(+true);
// console.log("");

let num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
gameCounter++;// prefix and postfix operators are different (in prefix value is added in beginning and in postfix value is added after usage)
console.log(gameCounter);

