 console.log("Start")
 
 
 try {
    a = 10
    c = a / b // Exception trow b is not defined 
    console.log(c)
 } catch(e) {
    console.log("b is not defined", e.name, e.message)
 }
 
 finally {
    console.log("End")
 }

 // own custom exception using Throw

let age = 20;
 
try {
    if(age <= 18) {
        throw "Not eligible to vote"
    } 
    console.log("Eligible")
} 
catch(e) {
    console.log(e)
}

finally {
    console.log("Thank You")
}


function divide(a, b) {

try {
    if (b === 0) {
        throw "not divisible by zero"
    }
        let c = a / b;
    console.log(c);

} catch(e) {
    console.log("error occured:" + e.message)
}
}
divide(10,2)
divide(100,0)