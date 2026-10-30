// Question 8: Leap Year Checker
var yearInput = prompt("Enter a year:");
var year = Number(yearInput);
if (yearInput === null || yearInput.trim() === "" || isNaN(year) || year % 1 !== 0) {
    document.write("Invalid year." + "<br>");
} else if (year % 400 === 0) {
    document.write(year + " is a Leap Year." + "<br>");
} else if (year % 100 === 0) {
    document.write(year + " is not a Leap Year." + "<br>");
} else if (year % 4 === 0) {
    document.write(year + " is a Leap Year." + "<br>");
} else {
    document.write(year + " is not a Leap Year." + "<br>");
}
