// Question 7: Discount Eligibility
var purchaseInput = prompt("Enter your total purchase amount:");
var purchaseAmount = Number(purchaseInput);
if (purchaseInput === null || purchaseInput.trim() === "" || isNaN(purchaseAmount) || purchaseAmount < 0) {
    document.write("Invalid purchase amount." + "<br>");
} else {
    var discountPercentage;
    if (purchaseAmount >= 10000) {
        discountPercentage = 20;
    } else if (purchaseAmount >= 5000) {
        discountPercentage = 10;
    } else if (purchaseAmount >= 2000) {
        discountPercentage = 5;
    } else {
        discountPercentage = 0;
    }
    var discountAmount = purchaseAmount * discountPercentage / 100;
    var finalAmount = purchaseAmount - discountAmount;
    document.write("Original Amount: Rs. " + purchaseAmount + "<br>");
    document.write("Discount: " + discountPercentage + "%" + "<br>");
    document.write("Discount Amount: Rs. " + discountAmount + "<br>");
    document.write("Final Amount: Rs. " + finalAmount + "<br>");
}

document.write('<p><a href="index.html">Back to questions</a></p>');
