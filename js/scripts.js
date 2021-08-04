let size, crust, toppings
let numbersOf
function getInputs() {
    size = document.getElementById("psize").value;
    crust = document.getElementById("ctype").value;
    toppings = document.getElementById("ttype").value;
    numbersOf = parseInt(document.getElementById("npizza").value);
    console.log(size);
    console.log(crust);
    console.log(toppings);
    console.log(numbersOf);
}
let priceOfSize, priceOfCrust, priceOfToppings, yourTotalPrice
function totalPrice() {
    getInputs()
    if (size == "small") {
        priceOfSize = 600;
        console.log(priceOfSize);

    } else if (size == "medium") {
        priceOfSize = 900;
        console.log(priceOfSize);

    }

    else if (size == "large") {
        priceOfSize = 1200;
        console.log(priceOfSize);
    }

    if (crust == "hawaiian") {
        priceOfCrust = 270;
        console.log(priceOfCrust);
    }

    else if (crust == "stuffed") {
        priceOfCrust == 350;
        console.log(priceOfCrust);
    }

    else if (crust == "cracker") {
        priceOfCrust = 250;
        console.log(priceOfCrust);
    }

    else if (crust == "thin") {
        priceOfCrust = 200;
        console.log(priceOfCrust);
    }

    if (toppings == "pepperoni") {
        priceOfToppings = 300;
        console.log(priceOfToppings);
    }

    else if (toppings == "sausage") {
        priceOfToppings == 150;
        console.log(priceOfToppings);
    }

    else if (toppings == "bacon") {
        priceOfToppings = 200;
        connsole.log(priceOfToppings);
    }

    else if (toppings == "pineapple") {
        priceOfToppings = 200;
        connsole.log(priceOfToppings);
    }

    yourTotalPrice = (priceOfSize + priceOfCrust + priceOfToppings) * numbersOf;
    console.log(yourTotalPrice)

    if (yourTotalPrice < 0) {
        alert("This is incorrect please make an order")

    } else {
        document.getElementById("output").innerHTML = "Your total price for " + numbersOf + " " + size + " " + crust + " " + toppings + " " + "pizza(s) " + " is Ksh. " + yourTotalPrice;
    }
};

