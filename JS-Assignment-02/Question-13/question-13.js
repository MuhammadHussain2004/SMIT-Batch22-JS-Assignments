// Question 13: Traffic Signal System
var signalColor = prompt("Enter signal color:");
if (signalColor !== null) {
    signalColor = signalColor.toLowerCase();
    if (signalColor === "red") {
        document.write("Stop" + "<br>");
    } else if (signalColor === "yellow") {
        document.write("Get Ready" + "<br>");
    } else if (signalColor === "green") {
        document.write("Go" + "<br>");
    } else {
        document.write("Invalid Signal" + "<br>");
    }
} else {
    document.write("Invalid Signal" + "<br>");
}

