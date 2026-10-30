// Question 3: Voting Eligibility
var ageInput = prompt("Enter your age:");
var age = Number(ageInput);
if (ageInput === null || ageInput.trim() === "" || isNaN(age) || age < 0) {
    document.write("Invalid age." + "<br>");
} else if (age >= 18) {
    document.write("You are eligible to vote." + "<br>");
} else {
    document.write("You are not eligible to vote." + "<br>");
}

document.write('<p><a href="index.html">Back to questions</a></p>');
