// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = 8;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
function telling() {
if ((fortune >= 0) && (fortune <= 3)) {
    //low
    console.log("It seems you were unfortunate, perhaps give it another go?");
}
else if ((fortune > 3) && (fortune <= 7)) {
    //average
    console.log("It seems your fortune was average, this time!"); 
}
else if ((fortune > 7) && (fortune <= 10)) {
    //high
    console.log("It appears you were fortunate, congradulations!");
}
else {
    //uncertain
    console.log("I couldn't seem to read your fortune, try again with 0-10.");
}
}

telling();