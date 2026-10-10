// # object behaving in many forms

class Animal {
     make_sound() {
        console.log("Animal makes sound..")
    }
}
class Dog extends Animal {
     make_sound() {
        console.log("Bow Bow..")
    }
}
class Cat extends Animal {
     make_sound() {
        console.log("Meow Meow..")
    }
}

let c = new Cat()
let d = new Dog()
c.make_sound()
d.make_sound()

