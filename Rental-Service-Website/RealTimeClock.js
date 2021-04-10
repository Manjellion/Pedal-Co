// Vanilla JavaScript function for the clock, allows us too apply it too real time clock

function clock(){

    // Variables for our clock which are assigned too id in HTML
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var phase = document.getElementById("phase");

    // Give function too the varibales 
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";

    // If the time is after 12 it will change too PM 
    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    // Variable assign new values too the text 0 from HTML if conditions are met
    // Condition is if less than 10 and puts in the value
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Applies the variable too the HTML element or ID
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    phase.innerHTML = am;
}

// Repeats the given function at the time 10am
var interval = setInterval(clock, 1000);