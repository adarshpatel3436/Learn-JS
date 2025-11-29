const name = "adarsh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // readibility jyada hai 

const gameName = new String('adarsh-ap-com')

// console.log(gameName[0]);   //print -- h
// console.log(gameName.__proto__);   //access prototype 


// console.log(gameName.length);    //find length
// console.log(gameName.toUpperCase());   
console.log(gameName.charAt(2));   //use index me kon sa char h
console.log(gameName.indexOf('h'));  //ye char konse idx me hai

const newString = gameName.substring(0, 4) // neg index use nhi kar sakte wo 0 se hi start hojayega
console.log(newString);


const anotherString = gameName.slice(-8, 4) // neg index use kar sakte hai 
console.log(anotherString);

const newStringOne = "   adarsh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //spaces ko print nhi karta 
//trim start aur trim end bhi h

const url = "https://adarsh.com/adarsh%20patel"

console.log(url.replace('%20', '-')) //%20 ko - se replace kar dega 

console.log(url.includes('abhishek')) //url me abhishek hai ya nhi true or false

console.log(gameName.split('-')); // - ke base me split karke array bana dega 
