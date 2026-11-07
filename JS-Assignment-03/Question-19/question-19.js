// Question 19: Student Result Analyzer
var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
var marks = [78, 92, 45, 88, 33];
var passed = 0;
var failed = 0;
var totalMarks = 0;
var topStudent = students[0];
var topMarks = marks[0];
for (var index = 0; index < students.length; index++) {
    var result = "FAIL";
    if (marks[index] >= 50) {
        result = "PASS";
        passed++;
    } else {
        failed++;
    }
    document.write(students[index] + " - " + marks[index] + " - " + result + "<br>");
    totalMarks = totalMarks + marks[index];
    if (marks[index] > topMarks) {
        topMarks = marks[index];
        topStudent = students[index];
    }
}
var classAverage = totalMarks / students.length;
document.write("Total Students: " + students.length + "<br>");
document.write("Passed: " + passed + "<br>");
document.write("Failed: " + failed + "<br>");
document.write("Top Student: " + topStudent + " (" + topMarks + ")<br>");
document.write("Class Average: " + classAverage);
