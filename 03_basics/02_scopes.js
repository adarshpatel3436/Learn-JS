//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){      
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);       //he can access the variable of parent function
    }
    // console.log(website);     // he cannot access the variable of child function
 
    two()     // calling

}

// one()       //calling



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);     // yha bhi same
    }
    // console.log(website);   // cannot access
}

// console.log(username);    // bahar access nahi kar sakte




// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))     // works because of hoisting kaise function declaration hai

function addone(num){
    return num + 1
}



addTwo(5)    // error because function expression hai, isliye hoisting nahi hoti   

const addTwo = function(num){
    return num + 2
}
