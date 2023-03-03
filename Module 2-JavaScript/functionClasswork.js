//! Write the following functions:
// -----------------------------------------------------------------
//! Pass a number into a function that will return the absolute value of that number
//! (absolute value of -1 is 1 and abs of 1 is 1) without the use of built in math functions.

function absValue(number) {
    if(number > 0) {
        return number;
    } else {
        number = number * -1;
        return number;
    }
    //console.log(number);
}

/*let output = absValue(-60);
console.log(output);
output = absValue(3);
console.log(output);
*/
// -----------------------------------------------------------------
//! Make a function called pow that accepts arguments x and y and returns the value of x to the y power

function pow(x, y) {
    let value = x;
    for(let j=1; j < y; j++) {
        value = value * x;
    }
    console.log(value);
}
//pow(2, 2);

// -----------------------------------------------------------------

//! Write a function that checks to see if the word as an argument is a palindrome (case insensitive) (toLowerCase() method)
//! and log the result to the console.

function palindrome(testWord) {
    //set word to lowercase
    let lowercaseWord = testWord.toLowerCase();
    //split word into array with all letters and spaces seperated
    let temporaryArray = lowercaseWord.split("");
    //turned array into a new string with lowercase letters(whitespaces included)
    let newString = temporaryArray.join('');
    //splits word to remove white spaces
    let combinedArray = newString.split(" ");
    //turned array into a new string with whitespaces removed
    let finalString = combinedArray.join('');

    //reverses array from above to compare
    let reverseArray = temporaryArray.reverse();
    //turned reverse array into a new string with lowercase letters (whitespaces included)
    let newReverseString = reverseArray.join('');
    //splits reverse string to remove white spaces
    let combinedReverseArray = newReverseString.split(" ");
    //turned reverse array into a new string with whitespaces removed
    let finalReverseString = combinedReverseArray.join('');

    //IF the final string and final reverse string match
    if (finalString === finalReverseString) {
        console.log(`True palindrome: ${finalString} === ${finalReverseString}`)
    } else { //IF they do not match
        console.log(`False palindrome: ${finalString} != ${finalReverseString}`)
    }
}

/*
palindrome("Hello there");
palindrome("Race CAR");
palindrome("Madam");
*/
// -----------------------------------------------------------------
//! Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words (case sensitive),
//! replace them with "REDACTED. Do this without any prototypical methods.

let bannedWords = ["Fuck", "Ass", "Bitch", "Cunt"];

function bannedWordsFunction (bannedArray) {


}


// -----------------------------------------------------------------
//! Write a function that accepts two arguments (names can be changed):a and b.
//! Cycle through all numbers between a and b (inclusive) and
//!  - if the number is divisible by 2 log "Fizz" if the number is divisible by 3 log "Buzz"
//!  - if it is divisible by both log "FizzBuzz" otherwise log the number.
//!  - if a==b log nothing,
//! if b < a count down otherwise count up

// ex.: a = 20; b = 40;
function numberCycle(a, b) {
    if(b > a) {
        while(b > a) {
            //count UP from a to b
            a = a + 1;
            //console.log(a);
            if((a % 2 === 0) && (a % 3 === 0)) {
                console.log(`${a} FizzBuzz`);
            } else if (a % 2 === 0) {
                console.log(`${a} Fizz`);
            } else if (a % 3 === 0) {
                console.log(`${a} Buzz`);
            } 
        } 
        console.log("\n");
    } else if (b < a) {
        while(b < a) {
            a = a - 1;
            //console.log(a);
            if((a % 2 === 0) && (a % 3 === 0)) {
                console.log(`${a} FizzBuzz`);
            } else if (a % 2 === 0) {
                console.log(`${a} Fizz`);
            } else if (a % 3 === 0) {
                console.log(`${a} Buzz`);
            } 
        }
        console.log("\n");
    } else {
        console.log("log nothing,");
    }
    console.log("\n");

}
numberCycle(20, 40);
numberCycle(20, 10);
numberCycle(10, 10);

// -----------------------------------------------------------------
//! Write a function to see if a pizza can be split evenly amongst a group of people.
//! The function should take two arguments: the number of people present, and the number of slices of the pizza.
//!   - If it can be split evenly log the result
//!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.

function pizzaShare(slices, people) {

    if(slices < people) {
        let leftOut = people - slices;
        console.log(`There is an unequal amount of slices to people ratio. ${leftOut} people will not be enjoying pizza.`)
    } else if (slices > people) {
        let extra= slices/people; 
        if(extra % 2 === 0) {
            console.log(`There will be extra! Everyone gets ${extra}.`)
        } else {
            console.log(`There is enough for everyone to get at least 1 slice each.`);
        }

    }

}
// pizzaShare(20, 10);
// pizzaShare(25, 10);
// pizzaShare(10, 20);
// -----------------------------------------------------------------
//! Write a function to see if a triangle is a right triangle based off
//! whether or not square of the longest side is equal to the sum of the squares of the other sides.

// -----------------------------------------------------------------
//! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in array format) and
//! then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks they are unable to survive
//!   - If they are able to take all of the attacks, they are able to survive.

//? Example of monster damage:
//? [1, 3, 2, 8, 5];
//? Warrior health:
//? 10;
//? Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive

// -----------------------------------------------------------------