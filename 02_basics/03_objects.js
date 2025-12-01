// singleton

//object do type se bante h 

// Object.create  // 1. constructor method ke through banta hai jo singleton hota h 

// 2. object literals   // ye singleton nhi hote

const mySym = Symbol("key1") // create symbol   


const JsUser = {
    name: "Adarsh",
    "full name": "Adarsh Patel", //dot se access nhi kr skte
    [mySym]: "mykey1", // symbol ko [ ] me hi access kr skte h
    age: 18,
    location: "Jaipur",
    email: "adarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email) //dot me karne ki jarurat nhi hoti //syntax allow nhi h 

// console.log(JsUser["email"]) // ye bracket notation h yha ham "" use kr skte h kyuki object k andar key string hoti h 

// console.log(JsUser["full name"])

// console.log(JsUser[mySym]) // access symbol value



JsUser.email = "adarsh@chatgpt.com"  

// Object.freeze(JsUser) // freeze krne k bad object me kuch bhi change nhi kr skte h

JsUser.email = "adarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){  // method(funct.) add kr rhe h object me
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword  current object ko point kr rha hai
}

console.log(JsUser.greeting()); //we can't use like console.log(JsUser.greeting)  // aise nhi kr skte h function call krne k liye () lagana jaruri h

console.log(JsUser.greetingTwo());