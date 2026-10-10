// 1.a function which accepts another function as argument is HOF
function order(callprepare) {
    console.log("Customer ordered for food")
    prepare()
}

function prepare() {
    console.log("food prepared")
}

order(prepare)

function pizza(customer) {
    console.log(`pizza is served to ${customer}`)
}

function burger(customer) {
    console.log(`burger is served to ${customer}`)
}

function restuatrent(order, customer) {
    console.log("Preparing your food")
    order(customer);
}
    restuatrent(pizza, "sufiyan")
    restuatrent(burger, "rizwan")



