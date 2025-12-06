
function sayMyName(){          // function declaration
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//sayMyName()

//function addTwoNumbers(number1, number2){    

//    console.log(number1 + number2);
//}

//addTwoNumbers(4, 5)                  // function call
//addTwoNumbers(10, "20")
//addTwoNumbers(100, null)



function addTwoNumbers(number1, number2){   

    let result = number1 + number2
    //return result
    console.log("Hello Adarsh");   // unreachable code
    return number1 + number2        // return statement both are valid
}

const result = addTwoNumbers(3, 5)    // return value hi store kar sakte hai

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage("adarsh"))   // passing parameter
 //console.log(loginUserMessage())  // default parameter




 function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))
// print [500,2000] array bcz 200 aur 400 val me chale gye 


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){     // koi bhi object pass kar sakte hai
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

    //` ` ye template literal hai ye variable ko string me convert kar deta hai aur ${} ye variable ko string me embed kar deta hai
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){   // getArray array ko accept kar raha hai
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));