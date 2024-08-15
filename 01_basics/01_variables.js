const accountId = 900293
let accountEmail = "hellow@google.com"
var accountPAssword = "23456"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // Contanst is assigned already ,cannot be changed again //not allowed

accountEmail ="abab@google.com"
accountPassword = "4242424"
accountCity = "Delhi"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])