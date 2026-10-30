// Question 11: Electricity Bill Calculator
var unitsInput = prompt("Enter units consumed:");
var unitsConsumed = Number(unitsInput);
if (unitsInput === null || unitsInput.trim() === "" || isNaN(unitsConsumed) || unitsConsumed < 0) {
    document.write("Invalid units. Enter a non-negative number." + "<br>");
} else {
    var ratePerUnit;
    if (unitsConsumed <= 100) {
        ratePerUnit = 10;
    } else if (unitsConsumed <= 200) {
        ratePerUnit = 15;
    } else if (unitsConsumed <= 300) {
        ratePerUnit = 20;
    } else {
        ratePerUnit = 25;
    }
    var electricityCharges = unitsConsumed * ratePerUnit;
    var serviceCharges = 150;
    var tax = electricityCharges * 0.05;
    var totalBill = electricityCharges + serviceCharges + tax;
    document.write("Electricity Charges: Rs. " + electricityCharges + "<br>");
    document.write("Service Charges: Rs. " + serviceCharges + "<br>");
    document.write("Tax: Rs. " + tax + "<br>");
    document.write("Total Bill: Rs. " + totalBill + "<br>");
}
