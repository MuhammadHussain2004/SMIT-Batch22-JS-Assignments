// Question 2: Even or Odd Number
var numberInput = prompt("Enter an integer:");
var number = Number(numberInput);
if (numberInput === null || numberInput.trim() === "" || isNaN(number) || number % 1 !== 0) {
    document.write("Invalid integer." + "<br>");
} else if (number % 2 === 0) {
    document.write(number + " is an even number." + "<br>");
} else {
    document.write(number + " is an odd number." + "<br>");
}

document.write('<p><a href="index.html">Back to questions</a></p>');
