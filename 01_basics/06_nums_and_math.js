const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));   //fix value like 100 to 100.0  it use when precision value is big 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));  //return string and value must be btw 1,-21  & pricise value par kitne length tak ye decide karta h 


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //local format me convert karta h ye like 1000000 to 10,00,000 in india by default ye US format me hota h 1,000,000



// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //absolute value sirf - value positive me ho jati h 
console.log(Math.round(4.6)); //nearest integer batata h
console.log(Math.ceil(4.2)); //upper integer batata h you can control rounding up
console.log(Math.floor(4.9)); //lower integer batata h
console.log(Math.min(4, 3, 6, 8)); // minimum value batata h
console.log(Math.max(4, 3, 6, 8)); // maximum value batata h  

console.log(Math.random()); // 0 to 1(0.9999999) ke beech me random value deta h
console.log((Math.random()*10) + 1); // 1 to 10 ke beech me random value deta h
console.log(Math.floor(Math.random()*10) + 1); // 1 to 10 ke beech me random integer value deta h

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // min to max ke beech me random integer value deta h . + min kyuki min to ho hi usse uper do
