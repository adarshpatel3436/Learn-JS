//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//src
// https://262.ecma-international.org/5.1/#sec-11.4.3



//##########################################################################################

// yha do types ki memory hoti hai first is HEAP and second is STACK 

//Primitive Datatypes -- STACK      and  Non-Primitive Datatypes -- HEAP

let myName = "Adarsh"

let anotherName = myName 
anotherName = "Abhishek"

console.log(anotherName);
console.log(myName);


let userOne = {
    email : "user123@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

// console.log(userOne);
// console.log(userTwo);

userTwo.email = "userTwo123@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);



