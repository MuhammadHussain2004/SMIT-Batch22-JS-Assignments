// Question 11: Student Name Search
var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
var searchName = prompt("Enter a student name:");
var found = false;
for (var index = 0; index < students.length; index++) {
    if (students[index] === searchName) {
        found = true;
        break;
    }
}
if (found) {
    document.write("Student Found!");
} else {
    document.write("Student Not Found!");
}
