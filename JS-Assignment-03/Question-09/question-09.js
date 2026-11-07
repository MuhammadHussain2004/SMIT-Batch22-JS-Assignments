// Question 09: Filter Passing Students
var marks = [85, 42, 67, 30, 90, 55, 25, 78];
var passingMarks = [];
for (var index = 0; index < marks.length; index++) {
    if (marks[index] >= 50) {
        passingMarks.push(marks[index]);
    }
}
var passingOutput = "[";
for (var index = 0; index < passingMarks.length; index++) {
    passingOutput = passingOutput + passingMarks[index];
    if (index < passingMarks.length - 1) {
        passingOutput = passingOutput + ", ";
    }
}
passingOutput = passingOutput + "]";
document.write("Passing Marks: " + passingOutput + "<br>");
document.write("Total Passed: " + passingMarks.length);
