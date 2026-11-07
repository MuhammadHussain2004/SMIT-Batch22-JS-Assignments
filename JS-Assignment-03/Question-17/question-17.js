// Question 17: Number Triangle
for (var row = 1; row <= 5; row++) {
    var numbers = "";
    for (var column = 1; column <= row; column++) {
        numbers = numbers + column;
    }
    document.write(numbers + "<br>");
}
