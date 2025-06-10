function compute(expression) {
    expression = expression.replace(/÷/g, "/").replace(/×/g, "*").replace(/%/g, "/100");
    try {
        return eval(expression);
    } catch (e) {
        return "Error";
    }
}

function enterValues(event) {
    let ioDiv = document.querySelector("#io");
    let x = ioDiv.textContent;
    switch (event) {
        case "ac":
        case "AC":
        case "Delete":
            x = "";
            break;

        case "c":
        case "C":
        case "Backspace":
            x = x.slice(0, -1);
            break;

        case "%":
            x += "%";
            break;

        case "÷":
        case "/":
            x += "÷";
            break;

        case "×":
        case "*":
            x += "×";
            break;

        case "-":
            x += "-";
            break;

        case "+":
            x += "+";
            break;

        case ".":
            x += ".";
            break;

        case "=":
        case "Enter":
            x = compute(x);
            break;

        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            x += event;
            break;
            
        default:
            break;
    }
    ioDiv.textContent = x;
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        enterValues(e.target.innerHTML);
        e.target.blur(); // Remove focus so Enter doesn't "click" again
    });
});

document.addEventListener("keydown", (event) => {
    enterValues(event.key);
});
