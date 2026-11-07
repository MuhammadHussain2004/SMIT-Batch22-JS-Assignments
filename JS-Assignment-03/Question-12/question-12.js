// Question 12: Find a Number
var numbers = [10, 25, 40, 55, 70, 85, 100];
var numberInput = prompt("Enter a number:");
var searchNumber = Number(numberInput);
var foundIndex = -1;
if (numberInput !== null && numberInput.trim() !== "" && !isNaN(searchNumber)) {
    for (var index = 0; index < numbers.length; index++) {
        if (numbers[index] === searchNumber) {
            foundIndex = index;
            break;
        }
    }
}
if (foundIndex !== -1) {
    document.write("Number found at index " + foundIndex + ".");
} else {
    document.write("Number not found.");
}
