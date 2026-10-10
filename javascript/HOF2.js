// a function is called as HOF when a function return function as its

function X() {
    let a = 10;
    return function Y() {
        console.log(a);
    }
}
// X() OR 
let res = X()
res()
res()
res()