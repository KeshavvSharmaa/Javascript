// nconst tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object, otherwise both are same as there is no internal difference
tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {             // can do nesting
            firstname: "Keshav",
            lastname: "Sharma"
        }
    }

}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is optional parameter which copies the data into the target source
const obj3 = {...obj1, ...obj2} //spread operator ...
// console.log(obj3);

// console.log(Objects.keys(tinderUser)); // returns all the keys and the output will be in array
// console.log(Objects.values(tinderUser)); //returns only all the values without the keys
// console.log(Objects.entries(tinderUser)); //returns keys and their values

// console.log(tinderUser.hasownproperty('isLoggedIn')); // to check whether it is available or not and tells in boolean

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Keshav"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course //de-structure i.e name was changed

//console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "Keshav",
//     "coursename": "js in hindi",
//     "price": "Free"
// }     JSON API

[
    {},
    {},
    {}
]  // JSON API