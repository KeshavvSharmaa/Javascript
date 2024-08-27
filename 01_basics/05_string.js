const name = "Keshav"
const repoCount = 10

// console.log(name + repoCount + "demo");

// console.log(`Hello,My name is ${name} and my repositary count is ${repoCount} `);

const gameName = new String('Halloweeen')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('w'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    keshav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Bruce.com/Bruce%20Wayne"
console.log(url.replace('%20','-'));

console.log(url.includes('sharma'));

const newDemoString = new String('hello-my-world')

console.log(newDemoString.split('-'));