// Question 07: Find Largest & Smallest
var numbers = [45, 12, 89, 3, 67, 22, 91, 10];
var largest = numbers[0];
var smallest = numbers[0];
for (var index = 1; index < numbers.length; index++) {
    if (numbers[index] > largest) {
        largest = numbers[index];
    }
    if (numbers[index] < smallest) {
        smallest = numbers[index];
    }
}
document.write("Largest: " + largest + "<br>");
document.write("Smallest: " + smallest);
