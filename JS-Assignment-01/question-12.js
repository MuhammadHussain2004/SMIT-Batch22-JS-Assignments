// Question 12: Salary Calculator
var basicSalary = Number(prompt("Enter basic salary:"));
var houseAllowance = basicSalary * 0.20;
var medicalAllowance = basicSalary * 0.10;
var taxDeduction = basicSalary * 0.05;
var grossSalary = basicSalary + houseAllowance + medicalAllowance;
var netSalary = grossSalary - taxDeduction;

document.write("Basic Salary: Rs. " + basicSalary + "<br>");
document.write("House Allowance: Rs. " + houseAllowance + "<br>");
document.write("Medical Allowance: Rs. " + medicalAllowance + "<br>");
document.write("Gross Salary: Rs. " + grossSalary + "<br>");
document.write("Tax Deduction: Rs. " + taxDeduction + "<br>");
document.write("Net Salary: Rs. " + netSalary + "<br>");
