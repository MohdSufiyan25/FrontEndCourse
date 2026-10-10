let a = 10;
let b = 5;
document.writeln("Arithmetic Operator");
document.writeln("<br>");
document.writeln(a + b); 
document.writeln("<br>");
document.writeln(a-b);
document.writeln("<br>");
document.writeln(a*b);
document.writeln("<br>");
document.writeln(a/b);
document.writeln("<br>");
document.writeln(a%b);
document.writeln("<br>");
document.writeln(a**b);
document.writeln("<br>");

let x = 8;
document.writeln(x++);
document.writeln(x);
document.writeln("<br>");

let y = 4;
document.writeln(y--);
document.writeln(y);
document.writeln("<br>");
document.writeln("<br>");



document.writeln("Assignment Operator");
document.writeln("<br>");
let c = 5;
document.writeln(c);
document.writeln("<br>");
document.writeln(c+=3);
document.writeln("<br>");
document.writeln(c-=3);
document.writeln("<br>");
document.writeln(c*=3);
document.writeln("<br>");
document.writeln(c/=3);
document.writeln("<br>");
document.writeln(c%=3);
document.writeln("<br>");
document.writeln("<br>");



document.writeln("Relational  Operator");
document.writeln("<br>");
let m = 5; 
let n = "5";
let o = "3";

document.writeln("<br>");
document.writeln(m==n);
document.writeln("<br>");
document.writeln(m===n);
document.writeln("<br>");
document.writeln(m!=o);
document.writeln("<br>");
document.writeln(m!==o);
document.writeln("<br>");
document.writeln(m<o);
document.writeln("<br>");
document.writeln(m<=o);
document.writeln("<br>");
document.writeln(m>o);
document.writeln("<br>");
document.writeln(m>=o);
document.writeln("<br>");

document.writeln("Logical  Operator");
document.writeln("<br>");
let age = 8;
document.writeln(age > 18 && age < 30);
document.writeln(age < 18 || age > 30);
document.writeln("<br>");
document.writeln(2 & 4);
document.writeln("<br>");


document.writeln("Ternary  Operator");
document.writeln("<br>");
// condition ? "Exp1 (true" : "Exp2 (false"
let canVote = (age >= 18) ? "Yes" : "No";
document.writeln(canVote);
// to find whether the number is even or oddd
document.writeln("<br>");
let num = 10;
let res = (num % 2 == 0) ? "Even" : "Odd";
document.writeln(res);
document.writeln("<br>");

document.writeln("Type  Operator");
document.writeln("<br>");
let p = 10;
document.writeln(p);
document.writeln(typeof(p));
document.writeln("<br>");
let q = "Hello";
document.writeln(q);
document.writeln(typeof(q));
document.writeln("<br>");
let r = true;
document.writeln(r);
document.writeln(typeof(r));
document.writeln("<br>");
document.writeln("<br>");
document.writeln(typeof  5.78);
document.writeln("<br>");


document.writeln("Datatype"  instanceof Array);
























































