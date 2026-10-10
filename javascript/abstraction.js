class CoffeeMachine {
    boilwater() {
        console.log("Water boiled")
    }
    addmilk() {
        console.log("Milk added")
    }
    addcoffeebean() {
        console.log("Beans added")
    }
    coffeeready() {
        // calling here only 
        this.boilwater()
        this.addmilk()
        this.addcoffeebean()
        console.log("Your coffee is ready.")
    }
}

let cm = new CoffeeMachine()

// cm.boilwater()
// cm.addmilk()
// cm.addcoffeebean()
// we don't want to show the process only result 
cm.coffeeready()


class ATM {
    #balance = 50000;
    withdraw(amount) {
        if(amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`${amount} withdraw successfully`);
    } else {
        console.log("Insufficient Balance");
    }
}
   checkBalance() {
    console.log(`Available Balance is: ${this.#balance}`)
   }
}

const a = new ATM();
a.withdraw(10000);
a.checkBalance();