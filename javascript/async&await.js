function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));

}

async function bookTicket() {
     await wait(2000);
    console.log("Open BMS")
     await wait(10000);
    console.log("select movie")
     await wait(4000);
    console.log("select timings")
      await wait(6000);
    console.log("select seats")
      await wait(1000);
    console.log("Payments")
}
bookTicket()
