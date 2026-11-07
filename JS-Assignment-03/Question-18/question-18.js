// Question 18: Multiplication Table Grid
for (var tableNumber = 2; tableNumber <= 5; tableNumber++) {
    document.write("Table of " + tableNumber + "<br>");
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        document.write(tableNumber + " x " + multiplier + " = " + (tableNumber * multiplier) + "<br>");
    }
}
