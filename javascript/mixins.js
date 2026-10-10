const FlyMixin = {
    fly() {
        console.log("Flying....")
    }
};
const SwimMixin = {
    swim() {
     console.log("Swimming....")
    }
};
class Duck{}
// Prototype Inheritance
Object.assign(Duck.prototype, FlyMixin, SwimMixin)
const duck = new Duck();
duck.fly();
duck.swim();

// SUPER 
 class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log("Animal does sounds")
    }
 }
 class Dog extends Animal {
    constructor(name,breed) {
        super(name);
        this.breed = breed
    }
    speak() {
        super.speak();
        console.log("Dog barks")
    }
 }

 const d = new Dog("Leo", "German")
 d.speak();