// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE
var words = ["This","is","JavaScript","Bootcamp!"];

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
var sentence;

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence(words) {
    for (var i = 0; i <= words.length - 1; i++) {
        if (i == 0) {
            sentence = (words[i]) 
            /* "undefined This is JavaScript Bootcamp!" is what I got without the
            additional if statement (since the instructions say to initialize
            the sentence variable as empty)*/
        }
        else {
            sentence += " "
            sentence += (words[i]) 
            /* I could just space out the words in the array, and still have no 
            extra spacing, but I decided to be extra obedient to the instructions.*/
        }
        
    }
    return sentence;
}

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log(createSentence(words))