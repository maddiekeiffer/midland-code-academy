// -----------------------------------------------------------------

//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

/*
let userWordInput = prompt("Enter whatever word you'd like:");

for(let i = 3; i < userWordInput.length; i++) {
    console.log(userWordInput[i]);
}
*/

// -----------------------------------------------------------------

//! Pick a random number. Prompt the user to guess a number.
//! If the number is correct, end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// To get a random number: Math.floor(Math.random() * max) + 1;
// Math.random generates a random number between 0 (inclusive) and 1 (exclusive).
// We multiply that number by the max value you want.
// Math.floor always rounds the number down.
// If max = 10, it should generate a random number from 1 to 10.

/*
let max=10;
let counter=0;
let randNumber = Math.floor(Math.random() * max) + 1;

let userInput = parseInt(prompt("Guess a random number 1-10:"));

while (userInput != randNumber) {
    userInput = parseInt(prompt("Incorrect. Guess a number 1-10 again:"));
    counter++;
}
console.log(`Correct! It took ${counter} tries.`)
*/

// -----------------------------------------------------------------

//! Using nested for loops, create and log the following pattern:
/*
//!    *
//!    **
//!    ***
//!    ****
//!    *****
*/

/*
for(let i = 1; i <= 5; i++) {
    let pattern = "";
    for(let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}*/

// -----------------------------------------------------------------

//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

/*
let counter = 0; 
//0 = heads, 1 = tails
let heads = 0;
let tails = 1;
let coin = Math.floor(Math.random() * 2); //Random num 0 through 1

while(heads != coin) {
    coin = Math.floor(Math.random() * 2);
    counter += 1;
    console.log(`Try #${counter}: Flip again!`);
}
console.log(`CONGRATS! It took ${counter} retries to get heads!`);
*/

// COMPARISON PRACTICE
// -----------------------------------------------------------------

//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    less than, or equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name.

// Use toLowerCase() method to make their name entirely lower case.
/*
let firstName = prompt("Enter your first name: ");

let lowercaseName = firstName.toLowerCase();

if(lowercaseName === "maddie") {
    alert("You have a great name! :) Twinsies.");
}

let userNumber = prompt("Pick a number between 1 and 100:");

if(userNumber % 2 === 0) {
    console.log("Your number is even.");
} else {
    console.log("Your number is odd.");
}

if(userNumber > 50) {
    console.log(`${userNumber} is greater than 50.`);
} else if (userNumber < 50) {
    console.log(`${userNumber} is lesser than 50.`);
} else {
    console.log(`${userNumber} is equal to 50.`);
}

for(let i = 100; i >= userNumber; i--) {
    console.log(`Countdown from 100: ${i}`);
}

while(userNumber >= 0) {
    console.log(`Countdown to zero: ${userNumber}`);
    userNumber -= 1;
}*/




// -----------------------------------------------------------------

//! Take the following arrays: `[-1,-2,2,10,7,8]` and `[4,-2,2,7,9,5]`
//! and see how many items the two arrays share in common.
//! Do this without prototypical methods (don't use array.filter and array.includes).
//! You will need a nested loop.

let arr1 = [-1,-2,2,10,7,8];
let arr2 = [4,-2,2,7,9,5];
let common = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
            common ++;
        }
    }
}

console.log(`There are ${common} items.`);