/*
    This short JavaScript is a small feature too the website, it will automatically 
    update the webpage with the a Greeting, depending on the time of day the message will
    change between Morning, Afternoon and evening automatically, it just depends on the users
    time.
*/

var today = new Date(); // Var is setting the variables and setting it too represent current date and time
var hourNow = today.getHours(); // Returns the hour from 0 to 23 for the specified date and time
var greetings; // Variable for greetings which will display message from the function

if (hourNow > 18) { // if statement if the time hour is greater than 18 (6pm)
    greetings = 'Good Evening'; // it will assign the value good evening too greetings
} else if (hourNow > 12) {  // if statement if the time hour is greater than 12 (12pm)
    greetings = 'Good Afternoon'; // it will assign the value good afternoon too greetings
} else if (hourNow > 0) {  // if statement if the time hour is greater than 0 (6an)
    greetings = 'Good Morning'; // it will assign the value good morning too greetings
} else {
    greetings = 'Welcome';
}

// write is a method that allows us too write HTML elements to a document
// whichever value greeting has been assigned it will be placed in the webpage as a heading 3
document.write('<h3>' + greetings + '</h3>');