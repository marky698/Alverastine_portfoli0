function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return; // Exit the function if inputs are invalid.
    }

    const sum = num1 + num2;
    const dif = num1 - num2;
    const div = num1 / num2;
    const mul = num1 * num2;
    const quo = num1 % num2;
    
    document.getElementById("sum").innerHTML = "The sum is: " + sum.toFixed(2);
    document.getElementById("dif").innerHTML = "The difference is: " + dif.toFixed(2);
    document.getElementById("div").innerHTML = "The quatient is: " + div.toFixed(2);
    document.getElementById("mul").innerHTML = "The product is: " + mul.toFixed(2);
    document.getElementById("quo").innerHTML = "The remainder is: " + quo.toFixed(2);
}

function clearFields() {
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("dif").innerHTML = " ";
    document.getElementById("div").innerHTML = " ";
    document.getElementById("mul").innerHTML = " ";
    document.getElementById("quo").innerHTML = " ";
}