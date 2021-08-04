let size, crust, toppings
function submitOrder() {
    size = document.getElementById("psize").value;
    crust = document.getElementById("ctype").value;
    toppings = document.getElementById("ttype").value;
    numbersOf = parseInt(document.getElementById("number").value);
    console.log(size);
    console.log(crust);
    console.log(toppings);
    console.log(numbersOf);
}