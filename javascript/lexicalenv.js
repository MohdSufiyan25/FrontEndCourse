// a is Global scope  
let a = 10; 
 function outer() {
    let b = 20;
    // b is Global scope  

    function inner() {
        if(true) {
            let c= 30;
                // c is Global scope  

            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
    inner();
 }
 outer();