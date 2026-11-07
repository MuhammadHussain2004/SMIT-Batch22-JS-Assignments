// Question 14: Remove Duplicate Numbers
var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
var uniqueNumbers = [];
for (var index = 0; index < numbers.length; index++) {
    var alreadyExists = false;
    for (var uniqueIndex = 0; uniqueIndex < uniqueNumbers.length; uniqueIndex++) {
        if (numbers[index] === uniqueNumbers[uniqueIndex]) {
            alreadyExists = true;
            break;
        }
    }
    if (alreadyExists === false) {
        uniqueNumbers.push(numbers[index]);
    }
}
var uniqueOutput = "[";
for (var index = 0; index < uniqueNumbers.length; index++) {
    uniqueOutput = uniqueOutput + uniqueNumbers[index] + (index < uniqueNumbers.length - 1 ? ", " : "");
}
uniqueOutput = uniqueOutput + "]";
document.write(uniqueOutput);
