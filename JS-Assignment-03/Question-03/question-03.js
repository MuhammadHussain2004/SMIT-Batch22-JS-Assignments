// Question 03: Even & Odd Number Generator
var evenNumbers = "";
var oddNumbers = "";
for (var number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        evenNumbers = evenNumbers + number + " ";
    } else {
        oddNumbers = oddNumbers + number + " ";
    }
}
document.write("Even: " + evenNumbers + "<br>");
document.write("Odd: " + oddNumbers);
