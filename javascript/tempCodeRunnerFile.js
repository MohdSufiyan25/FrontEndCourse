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