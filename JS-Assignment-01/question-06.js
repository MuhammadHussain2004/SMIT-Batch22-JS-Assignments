// Question 6: Shopping Bill
var product1Price = Number(prompt("Enter the price of product 1:"));
var product2Price = Number(prompt("Enter the price of product 2:"));
var product3Price = Number(prompt("Enter the price of product 3:"));
var totalBill = product1Price + product2Price + product3Price;
var discountAmount = totalBill * 0.10;
var finalBill = totalBill - discountAmount;

document.write("Total Bill: Rs. " + totalBill + "<br>");
document.write("Discount: Rs. " + discountAmount + "<br>");
document.write("Final Bill: Rs. " + finalBill + "<br>");
