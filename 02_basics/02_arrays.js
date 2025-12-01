const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // add dc_heros array as an element to marvel_heros array

console.log(marvel_heros); 
//console.log(marvel_heros[3][1]); // gives flash

const allHeros = marvel_heros.concat(dc_heros) // merges two arrays properly you can't add elements in between

//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator to merge two arrays also you can add elements in between

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // sab ko ek sath ek array me kar deta hai
//console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // false ye array hai ya nahi check karne ke liye

console.log(Array.from("Hitesh")) // ['H', 'i', 't', 'e', 's', 'h'] string ko array me convert kar deta hai

console.log(Array.from({name: "hitesh"})) // interesting // empty array dega kyuki object ko array me convert nahi kar sakte, isko batana padega ki kise convert karna hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] ye array bana deta hai given elements ka