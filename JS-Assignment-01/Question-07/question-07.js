// Question 7: Mathematical Expression


// A: multiplication happens before addition: 5 * 2 = 10, then 10 + 10 = 20.
var A = 10 + 5 * 2;
// B: parentheses happen first: 10 + 5 = 15, then 15 * 2 = 30.
var B = (10 + 5) * 2;
// C: division and multiplication are evaluated left to right, then addition/subtraction: 10 + 12 - 5 = 17.
var C = 20 / 2 + 3 * 4 - 5;
// D: parentheses first (8 - 3 = 5), then multiplication/division left to right, then addition: 5 + 2 = 7.
var D = 5 + 2 * (8 - 3) / 5;
// E: modulus and multiplication before addition: 30 % 4 = 2 and 6 * 2 = 12; result = 14.
var E = 30 % 4 + 6 * 2;

document.write("A: " + A + "  -   multiplication happens before addition: 5 * 2 = 10, then 10 + 10 = 20." + "<br>");
document.write("B: " + B + "  -  parentheses happen first: 10 + 5 = 15, then 15 * 2 = 30.  " + "<br>");
document.write("C: " + C + " -  division and multiplication are evaluated left to right, then addition/subtraction: 10 + 12 - 5 = 17.  " + "<br>");
document.write("D: " + D + " -  parentheses first (8 - 3 = 5), then multiplication/division left to right, then addition: 5 + 2 = 7.  " + "<br>");
document.write("E: " + E + "  -  modulus and multiplication before addition: 30 % 4 = 2 and 6 * 2 = 12; result = 14." + "<br>");

