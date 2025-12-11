// Immediately Invoked Function Expressions (IIFE)
// global scope pollution se bachne ke liye IIFE ka use hota hai


(function chai(){          
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);     // yeh arrow function IIFE hai
} )('adarsh')