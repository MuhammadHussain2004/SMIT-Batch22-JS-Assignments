// Question 5: Login Authentication
var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

if (username === "admin" && password === "admin123") {
    document.write("Login Successful! Welcome Admin." + "<br>");
} else if (username !== "admin") {
    document.write("Invalid Username." + "<br>");
} else {
    document.write("Invalid Password." + "<br>");
}

