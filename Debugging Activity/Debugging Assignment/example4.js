/**
 * Description: This program is asking the user to create a new password for their account but there is a bug 
 * in the code preventing the code to run as expected. Your task is to run and debug the program by reading the error message.
 * 
 * TODO: The program has an error message in the console. You should read the message and debug accordingly.
 */

function checkPoint4() {
    // TODO: Remove the bugs from the code below.
    let password = 0; // previously undefined, causing an error.

    while (password.length != 10) {
         /* canceling gives a null error, but this results in the prompt 
         simply closing, and is easily reopened, so I'll leave it. */
         // pass can only be exactly 10 characters, but likely intentional.
        password = prompt("New password must be 10 characters:"); 
    }
    alert("Your new password: " + password);
}