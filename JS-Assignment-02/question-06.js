// Question 6: Student Grade Calculator
var percentageInput = prompt("Enter your percentage:");
var percentage = Number(percentageInput);
if (percentageInput === null || percentageInput.trim() === "" || isNaN(percentage) || percentage < 0 || percentage > 100) {
    document.write("Invalid percentage. Enter a value from 0 to 100." + "<br>");
} else if (percentage >= 90) {
    document.write("Your Grade is A+." + "<br>");
} else if (percentage >= 80) {
    document.write("Your Grade is A." + "<br>");
} else if (percentage >= 70) {
    document.write("Your Grade is B." + "<br>");
} else if (percentage >= 60) {
    document.write("Your Grade is C." + "<br>");
} else if (percentage >= 50) {
    document.write("Your Grade is D." + "<br>");
} else {
    document.write("Your Grade is Fail." + "<br>");
}
