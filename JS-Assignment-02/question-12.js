// Question 12: Student Result System
var englishInput = prompt("Enter English marks:");
var englishMarks = Number(englishInput);
var mathematicsInput = prompt("Enter Mathematics marks:");
var mathematicsMarks = Number(mathematicsInput);
var scienceInput = prompt("Enter Science marks:");
var scienceMarks = Number(scienceInput);
var computerInput = prompt("Enter Computer marks:");
var computerMarks = Number(computerInput);
var urduInput = prompt("Enter Urdu marks:");
var urduMarks = Number(urduInput);

if (englishInput === null || mathematicsInput === null || scienceInput === null || computerInput === null || urduInput === null ||
    englishInput.trim() === "" || mathematicsInput.trim() === "" || scienceInput.trim() === "" || computerInput.trim() === "" || urduInput.trim() === "" ||
    isNaN(englishMarks) || isNaN(mathematicsMarks) || isNaN(scienceMarks) || isNaN(computerMarks) || isNaN(urduMarks) ||
    englishMarks < 0 || englishMarks > 100 || mathematicsMarks < 0 || mathematicsMarks > 100 ||
    scienceMarks < 0 || scienceMarks > 100 || computerMarks < 0 || computerMarks > 100 || urduMarks < 0 || urduMarks > 100) {
    document.write("Invalid marks. Each subject must have marks from 0 to 100." + "<br>");
} else {
    var obtainedMarks = englishMarks + mathematicsMarks + scienceMarks + computerMarks + urduMarks;
    var percentage = obtainedMarks / 500 * 100;
    var grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }
    document.write("Total Marks: 500" + "<br>");
    document.write("Obtained Marks: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Grade: " + grade + "<br>");
    if (englishMarks < 40 || mathematicsMarks < 40 || scienceMarks < 40 || computerMarks < 40 || urduMarks < 40) {
        document.write("Result: FAIL" + "<br>");
    } else {
        document.write("Result: PASS" + "<br>");
    }
}

