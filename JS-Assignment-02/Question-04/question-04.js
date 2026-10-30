// Question 4: Find the Largest Number
var firstInput = prompt("Enter the first number:");
var firstNumber = Number(firstInput);
var secondInput = prompt("Enter the second number:");
var secondNumber = Number(secondInput);
var thirdInput = prompt("Enter the third number:");
var thirdNumber = Number(thirdInput);

if (firstInput === null || secondInput === null || thirdInput === null || firstInput.trim() === "" || secondInput.trim() === "" || thirdInput.trim() === "" || isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    document.write("Enter three valid numbers." + "<br>");
} else {
    var largestNumber;
    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        largestNumber = firstNumber;
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        largestNumber = secondNumber;
    } else {
        largestNumber = thirdNumber;
    }
    document.write(largestNumber + " is the largest number." + "<br>");
}

