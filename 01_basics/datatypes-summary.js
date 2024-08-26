// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // there is no of float in js, number is a number whatever it is decimal or not

const isLoggedIn = false
const outsideTemp = null // it doesn't mean that the value is zero
let userEmail; // it will give undefined as output or we can assign is as let userEmail = undefined (both are same)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Symbol datatype makes unique

const BigNumber = 98984615321321869456n // use 'n' at last, it will automatically BigInt

// Non Primitive or Reference Type

// Arrays, Objects, Functions

const heroes = ["Shaktiman", "Bhagat Singh", "Sardar"] // Array is deccraled within square brackets

let myObj = { //objects are declared within curly braces
 name:"Keshav",
 age:21,

}

const myFunction = function(){
    console.log("Hello World");
}