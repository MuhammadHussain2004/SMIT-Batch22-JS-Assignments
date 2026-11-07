// Question 15: Star Triangle
for (var row = 1; row <= 5; row++) {
    var stars = "";
    for (var column = 1; column <= row; column++) {
        stars = stars + "*";
    }
    document.write(stars + "<br>");
}
