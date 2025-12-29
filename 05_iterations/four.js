const myObject = {
    js : 'javaScript' , 
    cpp : 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js" , "ruby" , "java" , "cpp"]

for (const key in programming) {
    //console.log(key);    // array key aayegi 
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// ye iteratebal nhi hai isiliye kuch print nhi hoga 