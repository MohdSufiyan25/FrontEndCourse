class Mentor {
    name = "sufiyan"
    age = 25;
    skill = "Java"
    teach() {
        console.log("Mentor teaching")
    }
}

let m = new Mentor()
// console.log(`${m.name} ${m.age} ${m.skill}`)
console.log(m.name)
console.log(m.age)
console.log(m.skill)
m.teach()

// CONSTRUCTOR 
class Student {
    constructor(name, age, skill) {
        this.name = name
        this.age = age 
        this.skill = skill 
    }
  study() {
    console.log(this.name , " studying")
  }
}
let s = new Student("zubair", 22, "Python")
console.log(s.name)
console.log(s.age)
console.log(s.skill)

s.study()