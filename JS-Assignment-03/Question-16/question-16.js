// Question 16: Reverse Star Triangle
for (var row = 5; row >= 1; row--) {
    var stars = "";
    for (var column = 1; column <= row; column++) {
        stars = stars + "*";
    }
    document.write(stars + "<br>");
}
