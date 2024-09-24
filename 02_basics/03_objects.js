// singleton
// Object.create - constructor method

// object literals

const mySym = Symbol("key1")
const JsUser = {
    "Full Name":"Keshav Sharma"
    [mySym]: "myKey1",
    name: "Sharma",
    age : 18,
    location: "Delhi",
    email: "abcxyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUSer["Full Name"]);
// console.log(JsUSer[mySym]); //to print a symbol

JsUser.email = "defuvw@gmail.com"
// Object.freeze(JsUser) // after this changes cannot be made and also doens't gives error
JsUser.email = "docomo@gmail.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


  
