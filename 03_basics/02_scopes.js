let a = 300 // global scope value is available inside the block scope

if (true) { 
    let a = 10 // block scope value is not availabe outside this scope
    const b = 20
    console.log("Inner Value: ",a);
    }

console.log(a);
// console.log(b);

