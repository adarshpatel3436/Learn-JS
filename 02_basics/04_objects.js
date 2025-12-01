// const tinderUser = new Object() // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { // object literal syntax
    email: "some@gmail.com",
    fullname: {   // nested object
        userfullname: {  // nested object
            firstname: "adarsh", 
            lastname: "patel" 
        }
    }
}

//access nested object
// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}  
const obj2 = {3: "a", 4: "b"}   
const obj4 = {5: "a", 6: "b"} 

// const obj3 = { obj1, obj2 }  //is tarah nhi kr skte h object ko merge kyuki ye nested object ban jayega

// const obj3 = Object.assign({}, obj1, obj2, obj4) // ye ek naya object banayega jisme obj1 and obj2 ki properties hongi

const obj3 = {...obj1, ...obj2} // spread operator se bhi kr skte h object merge 
// console.log(obj3);


const users = [    // array of objects
    {
        id: 1,
        email: "adarsh@gmail.com"  // object 1
    },
    {
        id: 1,
        email: "adarsh@gmail.com"  // object 2
    },
    {
        id: 1,
        email: "adarsh@gmail.com"    // object 3
    },
]

users[1].email           // access 2nd object ka email 


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // ye sare keys ko array me de dega

// console.log(Object.values(tinderUser));  // ye sare values ko array me de dega

// console.log(Object.entries(tinderUser)); // ye key and value dono ko array of arrays me de dega

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye check krta h ki given property object me h ya nhi  //true


const course = { 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "adarsh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "adarsh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
