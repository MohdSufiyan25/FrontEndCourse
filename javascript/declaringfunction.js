// Declaring function 
// Function function 

function square() {
    let num = 10;
    console.log(`The square of the number is ${num * num} `)
}
square()

// function Expression 
let square2  = function() {
    let num = 6;
    console.log(`The square of the number is ${num * num} `)
}
square2()


// Arrow function - Shorter syntax =>
    let square3  = (num1) => 
    console.log(`The square of the number is ${num1 * num1} `)
square3(9)

//  Anonymous function - IIFE(immediately invoked function execution)
(function() {
    console.log("Hello Everyone");
})();
