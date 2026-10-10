// 2 ways of creating arrays
// 1.using[]


let stud_info = [101,"Sufiyan",9.3,true]
console.log(stud_info)
console.log(stud_info[1])

// 2. using the Array Constructor

let colors = new Array("red","green","yellow")
console.log(colors)
console.log(colors[2])

// Operations

// Adding elements
colors.push("orange")
colors.unshift("black")
console.log(colors)

// Removing Elements
colors.pop()
colors.shift()
console.log(colors)

// splice() : adding,update, removing from any position 
let num = [1,2,3,4,5]
num.splice(2, 0, 0)
console.log(num)

// slice(): make the copy of original array
let numbers = [1,2,3,4,5,6,7,8]
let part = numbers.slice(2,5)
console.log(part)


// indexOf() gives index value 
// includes() gives true or false
let fruits = ["apple","banana", "Cherry","Graphes"]
console.log(fruits.indexOf("cherry")) 
console.log(fruits.includes("pineapple")) 



let a = [3,7,2,5,8,1]
console.log(a.sort().reverse())

// FOREACH LOOP 
let fruits1 = ["apple","banana", "Cherry","Graphes"]
fruits1.forEach(fruit => console.log(fruit))


// let even = [2,,4,6,8,10]
// even.forEach(e => console.log(e)) 

// // MAP,FILTER,REDUCE
// let num1 = [1,2,3,4,5,6]
// let res1 = num1.map(n => n * 5)
// console.log(res1)

// let even = num.filter(num => num % 2 === 0)
// console.log(even)

// let res = num.reduce(sum, num => sum + num, 0)
// console.log(res)


// concactenation 
let a6 = [1,2,3]
let b6 = [4,5,6]
console.log(b6.concat(a6))

// JOIN
let words = ["I", "am", "Knowledge"]
let sentence = words.join(" ")
console.log(sentence)

// Destructing array 
let teacher = ["Gamana", "Sandesh", "Ayush"]
let[frontend, java, infosys] = teacher;
console.log(teacher)
console.log(frontend, "handles frontend")
console.log(java, "handles Java")
console.log(infosys, "handles training")




