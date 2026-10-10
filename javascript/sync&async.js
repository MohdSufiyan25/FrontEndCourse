// Asynchronous & synchronus

// Synchronous because its step by step
console.log("Open BMS")
console.log("select movie")
console.log("select timings")
console.log("select seats")
console.log("Payments")


console.log("-------------")

// Asynchronous js execute based on the given time in miliseconds


setTimeout(() => {
    console.log("Open BMS")
}, 12000)

setTimeout(() => {
console.log("select movie")
}, 3000)

setTimeout(() => {
console.log("Payments")
}, 5000)



// Callbacks - Event Loop
setTimeout(() => {
    console.log("1. Open BMS");
    setTimeout(() => {
        console.log("2. Select Movie");
        setTimeout(() => {
            console.log("3. Select Timings");
            setTimeout(() => {
                console.log("4. select seats");
                setTimeout(() => {
                    console.log("5. Make payment");
                }, 2000);
            }, 8000);
        }, 5000);
    }, 3000);
}, 12000);