// alert 
alert("welcome 'Sufiyan' !")


// Confirm -- Ok or Cancel 
// confirm ("Do you want to continue")

let res = confirm ("Do you want to continue")
// document.write("The user selected: " res)

if(res) {
    document.write("The user selected OK")
}
else {
    document.write("The user selected Cancel")
}
document.write("<br>")


// prompt -- to copllect input from the user

let name = prompt("Enter your name: ")
document.write("hello ", name)
document.write("<br>")

// Input from user add 2 numbers 

let num1 = Number(prompt("Enter first number:"))
let num2 = Number(prompt("Enter second number:"))
let sum = num1 + num2;
document.write("The result is: " , sum)
