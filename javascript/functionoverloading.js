// declaration 
function add(a,b) {
    console.log(a+b)
}
function add(a,b,c) {
    console.log(a+b+c)
}
function add(a,b,c,d) {
    console.log(a+b+c+d)
}
// calling 

add(3,3)
add(3,4,5)
add(3,4,5,6)


// spread operator 
function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total = total + num
    }
    console.log(total)
}

//  calling 

add(3,3)
add(3,4,5)
add(3,4,5,6)
