const user = {
    username: "adarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // this refer current object
        console.log(this);    
    }

}

//user.welcomeMessage()
//user.username = "sam"     // change value of username    
//user.welcomeMessage()

 console.log(this);    // return empty object in node js



// function chai(){
//     let username = "adarsh"
//     console.log(this.username);   // undefined kyuki ye     sirf  object ke andar hi kaam karta hai
// }

// chai()   



// const chai = function () {
//     let username = "adarsh"
//     console.log(this.username);   // undefined  same as above
// }


// arrow function

const chai =  () => {    
    let username = "hitesh"
    console.log(this);  // arrow function me this bahar ke context ko refer karta hai
    console.log(this.username);   // undefined  kyuki arrow function me this bahar ke context ko refer karta hai
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



//implicit return
//const addTwo = (num1, num2) =>  num1 + num2

// implicit return with object
//const addTwo = (num1, num2) => ( num1 + num2 )


// const addTwo = (num1, num2) => {username: "hitesh"}  //undefined  // returning object wrong way
const addTwo = (num1, num2) => ({username: "hitesh"})  // returning object


console.log(addTwo(3, 4))




