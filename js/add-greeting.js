/*This script displays a greeting to the user based upon the current time.
It is an example implemented from the Javascript & jQuery book  */

var today = new Date(); // Create a new date object
var hourNow = today.getHours(); // Find the current hour
var greeting;

//Display the appropriate greeting based on the current time
if (hourNow > 18 || hourNow < 6) {
    greeting = 'Good night!';
} else if (hourNow > 15) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 6) {
    greeting = 'Good Morning';
} else {
    greeting = 'Hi!';
}

document.write('<h1>' + greeting + '</h1>');