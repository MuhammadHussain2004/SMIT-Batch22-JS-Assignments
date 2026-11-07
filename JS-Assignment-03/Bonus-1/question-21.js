// Bonus 01: Prime Number Checker
var numberInput = prompt("Enter a positive integer greater than 1:");
var number = Number(numberInput);

if (numberInput === null || numberInput.trim() === "" || isNaN(number) || number % 1 !== 0 || number <= 1) {
    document.write("Please enter a positive integer greater than 1.");
} else {
    var isPrime = true;
    for (var divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(number + " is a prime number.");
    } else {
        document.write(number + " is not a prime number.");
    }
}
