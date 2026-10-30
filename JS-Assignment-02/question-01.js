// Question 1: Positive, Negative or Zero
var numberInput = prompt("Enter a number:");
var number = Number(numberInput);
if (numberInput === null || numberInput.trim() === "" || isNaN(number)) {
    document.write("Invalid number." + "<br>");
} else if (number > 0) {
    document.write(number + " is a positive number." + "<br>");
} else if (number < 0) {
    document.write(number + " is a negative number." + "<br>");
} else {
    document.write("The number is zero." + "<br>");
}

document.write('<p><a href="index.html">Back to questions</a></p>');
