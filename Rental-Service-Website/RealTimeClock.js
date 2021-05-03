// Vanilla JavaScript function for the clock, allows us too apply it too real time clock

function clock(){

    // Variables for our clock which are assigned too id in HTML
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var phase = document.getElementById("phase");

    // Date is a object that allows us too represent time
    var h = new Date().getHours(); // getHours() method give us the specified hour of the day
    var m = new Date().getMinutes(); // getMinutes() method give us the specified hour of the day
    var s = new Date().getSeconds(); // getSeconds() method give us the specified hour of the day
    var am = "AM";

    // If the time is after 12 it will change too PM 
    // If the hour is greater than 12 than we change the AM too PM indicating it is afternoon
    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    // Variable assign new values too the text 0 from HTML if conditions are met
    // Condition is if less than 10 and puts in the value
    // If the greater value of 10 has no value then it will return hour, minutes and second too be zero value
    // However we will reset the interval for the clock at 10, this operation is only used so the operator ? uses logic too covert the data too time and format it the way we want it
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Applies the variable too the HTML element or ID
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    phase.innerHTML = am;
}

// Repeats the given function at the time 10:00am
var interval = setInterval(clock, 1000);