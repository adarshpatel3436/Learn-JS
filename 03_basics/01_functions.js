
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

 console.log(loginUserMessage("adarsh"))   // passing parameter
 console.log(loginUserMessage())  // default parameter

