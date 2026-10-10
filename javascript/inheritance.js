class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`);
  }

  work() {
    console.log("Employee working");
  }
}

class Developer extends Employee {
  work() {
    console.log("Developer");
  }

  work1() {
    console.log("Dev project");
  }
}

class Tester extends Employee {
  work() {
    console.log("Tester");
  }

  work1() {
    console.log("Testing done");
  }
}

// Creating objects like in your notes
let d = new Developer("Ravi", 25, "Developer");
let t = new Tester("Priya", 24, "Tester");

d.info();
d.work();
d.work1();

t.info();
t.work();
t.work1();