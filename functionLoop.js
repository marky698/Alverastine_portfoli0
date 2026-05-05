function runForLoop() {
    let num = document.getElementById("num1").value;
    let text = document.getElementById("text1").value;
    let output = "";

    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "<br>";
    }

    document.getElementById("output1").innerHTML = output;
}

function clearFor() {
    document.getElementById("output1").innerHTML = "";
}


function runWhileLoop() {
    let num = document.getElementById("num2").value;
    let text = document.getElementById("text2").value;
    let output = "";

    let i = 1;
    while (i <= num) {
        output += i + ". " + text + "<br>";
        i++;
    }

    document.getElementById("output2").innerHTML = output;
}

function clearWhile() {
    document.getElementById("output2").innerHTML = "";
}


function runDoWhileLoop() {
    let num = document.getElementById("num3").value;
    let text = document.getElementById("text3").value;
    let output = "";

    let i = 1;
    do {
        output += i + ". " + text + "<br>";
        i++;
    } while (i <= num);

    document.getElementById("output3").innerHTML = output;
}

function clearDo() {
    document.getElementById("output3").innerHTML = "";
}