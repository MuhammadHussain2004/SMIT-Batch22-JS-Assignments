// Bonus 02: Common Elements
var array1 = [10, 20, 30, 40, 50];
var array2 = [30, 40, 50, 60, 70];
var commonElements = [];

for (var firstIndex = 0; firstIndex < array1.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < array2.length; secondIndex++) {
        if (array1[firstIndex] === array2[secondIndex]) {
            commonElements.push(array1[firstIndex]);
            break;
        }
    }
}

var output = "[";
for (var index = 0; index < commonElements.length; index++) {
    output = output + commonElements[index] + (index < commonElements.length - 1 ? ", " : "");
}
output = output + "]";
document.write(output);
