// Question 10: Sum & Average of Array
var prices = [1200, 850, 430, 1600, 990];
var total = 0;
for (var index = 0; index < prices.length; index++) {
    total = total + prices[index];
}
var average = total / prices.length;
document.write("Total: " + total + "<br>");
document.write("Average: " + average);
