// Get the display

const display =
    document.getElementById("display");


// Add numbers and operators

function appendValue(value) {

    display.value += value;
}


// Clear the display

function clearDisplay() {

    display.value = "";
}


// Delete the last character

function deleteLast() {

    display.value =
        display.value.slice(0, -1);
}


// Calculate the result

function calculate() {

    try {

        display.value =
            eval(display.value);

    }

    catch {

        display.value = "Error";

    }
}


// Keyboard support

document.addEventListener(
    "keydown",
    function(event) {

        if (
            (event.key >= "0" &&
             event.key <= "9") ||
            event.key === "+" ||
            event.key === "-" ||
            event.key === "*" ||
            event.key === "/" ||
            event.key === "."
        ) {

            appendValue(event.key);

        }


        if (event.key === "Enter") {

            calculate();

        }


        if (event.key === "Escape") {

            clearDisplay();

        }


        if (event.key === "Backspace") {

            deleteLast();

        }

    }
);