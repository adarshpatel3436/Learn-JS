// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6) // add 6 in array
myArr.push(7) // add 7 
myArr.pop()   //delete last value

myArr.unshift(9)  //  insert 9 at start
myArr.shift()    // remove 9  , remove first idx value

console.log(myArr.includes(9));  //9 hai ya nhi t/f
console.log(myArr.indexOf(3)); //idx 3 me kaun si value hai aur jo idx na ho to -1 dega


const newArr = myArr.join()   //add all the element of the array into a string

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);



// slice, splice

console.log("A ", myArr);  

const myn1 = myArr.slice(1, 3)  //extract idx 1 se 3 tak ka part new array me dega  

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // idx 1 se 3 tak ka part original array se hata dega aur new array me dega
console.log("C ", myArr);
console.log(myn2);