// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {
    //console.log(num);
}

const greetings ="hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}



// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   // values unique hogi map me 


//console.log(map);

//for (const key of map) {
//   console.log(key);    // print like array []
//}
//o/p-
//[IN :- India]
//[USA :- United States of America]
//[Fr :- France]


//agar key aur values alag alag chahiye 
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//o/p - 
//IN :- India
//USA :- United States of America
//Fr :- France


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
   // console.log(key, ':-', value);
//}
//myObject is not iterable