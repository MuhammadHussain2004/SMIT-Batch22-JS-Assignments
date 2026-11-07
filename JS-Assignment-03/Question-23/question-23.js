// Bonus 03: Frequency Counter
var numbers = [2, 3, 2, 5, 3, 2, 4];
var alreadyCounted = [];

for (var index = 0; index < numbers.length; index++) {
    if (alreadyCounted[index] !== true) {
        var count = 0;
        for (var checkIndex = 0; checkIndex < numbers.length; checkIndex++) {
            if (numbers[index] === numbers[checkIndex]) {
                count++;
                alreadyCounted[checkIndex] = true;
            }
        }
        document.write(numbers[index] + " appears " + count + (count === 1 ? " time<br>" : " times<br>"));
    }
}
