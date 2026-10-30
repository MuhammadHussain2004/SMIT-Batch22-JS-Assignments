// Question 15: Employee Salary & Bonus System
var basicSalaryInput = prompt("Enter basic salary:");
var basicSalary = Number(basicSalaryInput);
var yearsOfServiceInput = prompt("Enter years of service:");
var yearsOfService = Number(yearsOfServiceInput);
if (basicSalaryInput === null || yearsOfServiceInput === null || basicSalaryInput.trim() === "" || yearsOfServiceInput.trim() === "" ||
    isNaN(basicSalary) || isNaN(yearsOfService) || basicSalary < 0 || yearsOfService < 0) {
    document.write("Invalid salary or years of service." + "<br>");
} else {
    var bonusPercentage;
    if (yearsOfService < 1) {
        bonusPercentage = 0;
    } else if (yearsOfService <= 3) {
        bonusPercentage = 5;
    } else if (yearsOfService <= 5) {
        bonusPercentage = 10;
    } else {
        bonusPercentage = 15;
    }
    var bonus = basicSalary * bonusPercentage / 100;
    var taxPercentage;
    if (basicSalary >= 100000) {
        taxPercentage = 5;
    } else {
        taxPercentage = 2;
    }
    var tax = basicSalary * taxPercentage / 100;
    var finalSalary = basicSalary + bonus - tax;
    document.write("Basic Salary: Rs. " + basicSalary + "<br>");
    document.write("Bonus: Rs. " + bonus + "<br>");
    document.write("Tax: Rs. " + tax + "<br>");
    document.write("Final Salary: Rs. " + finalSalary + "<br>");
}
