// conditional statements 

// if 
let age = 18;

if(age >= 18) {
    console.log("A student is eligible for voting.")
}
console.log("Not eligible")

// if else 
    let number = 5;
if (number > 0) {
    console.log("Number is positve")
} else {
        console.log("Number is  not positve")

}

// if else-if ladder 
let num = 0;
if (num > 0) {
    console.log("Number is positve")
} else if(num < 0) {
        console.log("Number is  not positve")
} else if(num == 0) {
         console.log("Number is  zero")
   
}

// nested if 
// if u want to check both the conditons must be true

let marks = 90;
if (marks >= 80) {
    console.log("Distinction")
} else if (marks >= 40) {
        console.log("passed")
}
else {
        console.log("Failed")

}

// Switch 
let grade = 'B';
switch(grade) {
case 'A': 
console.log("Excellent");
break;

case 'B':
    console.log("Good");
    break;
case 'C':
    console.log("Average");
    break;
    default:
        console.log("Failed");
        break;
}


// FOR-OF  LOOP used to access ARRAY
let fruits = ["apple", "mango", "orange"]

for (let i of fruits)  {
            console.log(i);
}

// FOR-IN  LOOP used to access OBJECTS
  let stu = {
    "name": "Sufiyan"
}

for (let s in stu) {
    console.log(`${s} is ${stu[s]}`)
}



