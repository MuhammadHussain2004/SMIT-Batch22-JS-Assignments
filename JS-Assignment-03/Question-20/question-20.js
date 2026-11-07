// Question 20: Mini Shopping Cart
var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
var prices = [2500, 1200, 22000, 800, 3500];
for (var index = 0; index < products.length; index++) {
    document.write((index + 1) + ". " + products[index] + " - Rs. " + prices[index] + "<br>");
}
var productInput = prompt("Select a product number (1-5):");
var productNumber = Number(productInput);
var quantityInput = prompt("Enter quantity:");
var quantity = Number(quantityInput);
if (productInput === null || productInput.trim() === "" || isNaN(productNumber) || productNumber % 1 !== 0 || productNumber < 1 || productNumber > products.length) {
    document.write("Invalid product selection.");
} else if (quantityInput === null || quantityInput.trim() === "" || isNaN(quantity) || quantity % 1 !== 0 || quantity <= 0) {
    document.write("Quantity must be a positive integer.");
} else {
    var selectedIndex = productNumber - 1;
    var subtotal = prices[selectedIndex] * quantity;
    var discount = 0;
    if (subtotal >= 5000) {
        discount = subtotal * 0.10;
    }
    var finalBill = subtotal - discount;
    document.write("<br>Product: " + products[selectedIndex] + "<br>");
    document.write("Unit Price: Rs. " + prices[selectedIndex] + "<br>");
    document.write("Quantity: " + quantity + "<br>");
    document.write("Subtotal: Rs. " + subtotal + "<br>");
    document.write("Discount: Rs. " + discount + "<br>");
    document.write("Final Bill: Rs. " + finalBill);
}
