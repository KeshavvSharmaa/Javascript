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
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ // rest and spread operator
       return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800)) #val1 = 200, val2 = 400 and the rest will go to num1 i.e 600 , 800

const user = {
  username: "Keshav",
  price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 700]

function returnSecondValue(getArray){
      return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 900]));