// Question 9: Job Eligibility Checker
var ageInput = prompt("Enter your age:");
var age = Number(ageInput);
var experienceInput = prompt("Enter your years of experience:");
var yearsExperience = Number(experienceInput);
var knowsJavaScript = prompt("Do you know JavaScript? (yes or no)");

if (ageInput === null || experienceInput === null || ageInput.trim() === "" || experienceInput.trim() === "" || isNaN(age) || isNaN(yearsExperience) || age < 0 || yearsExperience < 0) {
    document.write("Invalid age or experience value." + "<br>");
} else if (age >= 18 && age <= 30 && yearsExperience >= 1 && knowsJavaScript !== null && knowsJavaScript.toLowerCase() === "yes") {
    document.write("Congratulations! You are eligible to apply." + "<br>");
} else {
    document.write("Sorry! You do not meet the requirements." + "<br>");
}
