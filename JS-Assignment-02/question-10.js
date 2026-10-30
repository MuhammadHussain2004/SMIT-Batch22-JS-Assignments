// Question 10: ATM Withdrawal System
var pin = prompt("Enter your PIN:");
var withdrawalAmount = Number(prompt("Enter withdrawal amount:"));
var balance = 25000;

if (pin !== "1234") {
    document.write("Invalid PIN." + "<br>");
} else if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
    document.write("Withdrawal amount must be greater than zero." + "<br>");
} else if (withdrawalAmount > balance) {
    document.write("Insufficient balance." + "<br>");
} else if (withdrawalAmount % 500 !== 0) {
    document.write("Withdrawal amount must be a multiple of Rs. 500." + "<br>");
} else {
    balance = balance - withdrawalAmount;
    document.write("Withdrawal Successful!" + "<br>");
    document.write("Withdrawn Amount: Rs. " + withdrawalAmount + "<br>");
    document.write("Remaining Balance: Rs. " + balance + "<br>");
}

document.write('<p><a href="index.html">Back to questions</a></p>');
