class Bank {
    #balance;
    constructor(balance) {
        // private using #
        this.#balance = balance  
    }
    getBalance() {
        return this.#balance
    }

    setBalance(newBalance) {
        if(newBalance > 0) {
            this.newBalance = newBalance        }
        else {
            console.log("Invalid balance")
        }
    }
}

let b = new Bank(30000)
console.log(b.getBalance())
b.setBalance(60000)
console.log(b.getBalance())
