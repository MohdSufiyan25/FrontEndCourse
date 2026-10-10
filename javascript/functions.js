// 4 TYPES OF FUNCTION BASED ON I/P AND O/P PARAMETER 
// function declaration

// 1 no i/p and no o/p 
function add() {
    let a = 10;
    let b = 20;
    let c = 30;

    console.log(`The sum of ${a} + ${b} is ${c}`);
}

// function calling 
add();

// 2 with  i/p and no o/p 
function add1(a,b) {
    let c = a + b;

    console.log(`The sum of ${a} + ${b} is ${c}`);
}

// function calling 
add1(30,30);


// 3  with no   i/p and with o/p 
let a = 40;
    let b = 30;
function add2() {
    
    let c = a + b;
    return c

}

// function calling 
 let res = add2();
     console.log(`The sum of ${a} + ${b} is ${res}`);

     
// 4 with  i/p and with o/p 

function add3(a,b) {
    
    let c = a + b;
    return c

}

// function calling 
 let res1 = add3(100,100);
     console.log(`The sum of is ${res1}`);


     





