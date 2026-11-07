// Question 04: Multiplication Table
var numberInput = prompt("Enter a number:");
var number = Number(numberInput);
if (numberInput === null || numberInput.trim() === "" || isNaN(number)) {
    document.write("Please enter a valid number.");
} else {
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        document.write(number + " x " + multiplier + " = " + (number * multiplier) + "<br>");
    }
}
