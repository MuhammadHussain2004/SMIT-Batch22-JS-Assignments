// Question 13: Filter Numbers
var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];
var positiveNumbers = [];
var negativeNumbers = [];
var zeroNumbers = [];
for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        positiveNumbers.push(numbers[index]);
    } else if (numbers[index] < 0) {
        negativeNumbers.push(numbers[index]);
    } else {
        zeroNumbers.push(numbers[index]);
    }
}
var positiveOutput = "[";
for (var index = 0; index < positiveNumbers.length; index++) {
    positiveOutput = positiveOutput + positiveNumbers[index] + (index < positiveNumbers.length - 1 ? ", " : "");
}
positiveOutput = positiveOutput + "]";
var negativeOutput = "[";
for (var index = 0; index < negativeNumbers.length; index++) {
    negativeOutput = negativeOutput + negativeNumbers[index] + (index < negativeNumbers.length - 1 ? ", " : "");
}
negativeOutput = negativeOutput + "]";
var zeroOutput = "[";
for (var index = 0; index < zeroNumbers.length; index++) {
    zeroOutput = zeroOutput + zeroNumbers[index] + (index < zeroNumbers.length - 1 ? ", " : "");
}
zeroOutput = zeroOutput + "]";
document.write("Positive: " + positiveOutput + "<br>");
document.write("Negative: " + negativeOutput + "<br>");
document.write("Zeros: " + zeroOutput);
