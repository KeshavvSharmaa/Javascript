// if you have a code of 10-20 lines, then function is used to gather these into a package and we can use them-
// -further without writing again and again

function sayMyName() {
console.log("K");
console.log("E");
console.log("S");
console.log("H");
console.log("A");
console.log("V");
}

// sayMyName #function reference
// sayMyName()  #function execution

// function addTwoNumbers(Number1, Number2){
//   console.log(Number1 + Number2)
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(Number1, Number2){
   // let result = Number1 + Number2
   //return result                   // after return any value will not be executed, only values before that 
    return Number1 + Number2
}

const result = addTwoNumber(7, 9)
// console.log("Result :", result);

function loginUserMessage(username) {
    if(!username){
        console.log("Please enter a username");
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Keshav"))
console.log(loginUserMessage())