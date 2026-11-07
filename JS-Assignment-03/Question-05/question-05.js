// Question 05: Sum of Natural Numbers
var numberInput = prompt("Enter a positive integer N:");
var limit = Number(numberInput);
if (numberInput === null || numberInput.trim() === "" || isNaN(limit) || limit <= 0 || limit % 1 !== 0) {
    document.write("Please enter a positive integer.");
} else {
    var sum = 0;
    for (var number = 1; number <= limit; number++) {
        sum = sum + number;
    }
    document.write("Sum = " + sum);
}
