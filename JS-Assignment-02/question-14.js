// Question 14: Cinema Ticket Booking System
var ageInput = prompt("Enter your age:");
var age = Number(ageInput);
var dayType = prompt("Enter day type (weekday or weekend):");
if (ageInput === null || ageInput.trim() === "" || isNaN(age) || age < 0) {
    document.write("Invalid age." + "<br>");
} else if (dayType === null || (dayType.toLowerCase() !== "weekday" && dayType.toLowerCase() !== "weekend")) {
    document.write("Invalid day type." + "<br>");
} else {
    var baseTicketPrice;
    if (age < 5) {
        baseTicketPrice = 0;
    } else if (age <= 12) {
        baseTicketPrice = 300;
    } else if (age <= 59) {
        baseTicketPrice = 700;
    } else {
        baseTicketPrice = 400;
    }
    var weekendSurcharge = 0;
    if (dayType.toLowerCase() === "weekend" && age >= 5) {
        weekendSurcharge = 100;
    }
    var finalTicketPrice = baseTicketPrice + weekendSurcharge;
    document.write("Base Ticket Price: Rs. " + baseTicketPrice + "<br>");
    document.write("Weekend Surcharge: Rs. " + weekendSurcharge + "<br>");
    document.write("Final Ticket Price: Rs. " + finalTicketPrice + "<br>");
}
