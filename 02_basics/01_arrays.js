// Array

const myArr = [1, 2, 3, 4, 5] //elemnts can be of any type boolean, string etc.
const myHeroes = ["shaktimaan", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

// Array Methods

// myArr.push(6)  // adds value to the array
// myArr.push(7)
// myArr.pop() //no need to provide value, it simply removes the last value of the array

// myArr.unshift(7) //adds value in the first of the array at index[0] like push method but diff position
// myArr.shift()   //removes first value of the array like pop method but diff position

// console.log(myArr.includes(7)); //checks the value available or not and gives answer in boolean i.e t or f
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //join adds both arrays and converts them into string

console.log(myArr);
console.log(newArr);

// slice and splice (very important)

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

