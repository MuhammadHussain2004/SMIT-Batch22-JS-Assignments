// Question 10: Marks Percentage Calculator
var englishMarks = Number(prompt("Enter English marks:"));
var mathMarks = Number(prompt("Enter Math marks:"));
var scienceMarks = Number(prompt("Enter Science marks:"));
var computerMarks = Number(prompt("Enter Computer marks:"));
var urduMarks = Number(prompt("Enter Urdu marks:"));
var obtainedMarks = englishMarks + mathMarks + scienceMarks + computerMarks + urduMarks;
var totalMarks = 500;
var percentage = obtainedMarks / totalMarks * 100;

document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

document.write('<p><a href="index.html">Back to questions</a></p>');
