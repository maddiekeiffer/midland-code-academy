// FIZZBUZZ

// Run through all the numbers from 1-100
// Log the number and "FizzBuzz" if the number is divisible by 3 and 5
// Log the number and "Fizz" if the number is divisible by 3
// Log the number and "Buzz" if the number is divisible by 5
// Log the number if none of the above conditions are true

/*
for (i = 1; i <= 100; i++ ) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}*/

//OTHER CLASSWORK
//! Familiarize yourself with object traversal.
let randObject = 7;
console.log(randObject);

randObject = "Object :)";
console.log(randObject);

//! Build an object with at least 3 layers deep of objects and practice logging to console.

let zombieLand = {
    genre: "Comedy-Horror",
    yearReleased: 2009,
    cast: ["Woody Harrelson", "Jesse Eisenberg", "Emma Stone", "Abigail Breslin"],
    financials: {
        budget: "Budget = $23.6 million",
        boxOffice: "Box Office = $102.4 million"
    },
    sequel: {
        yearReleased: 2019,
        name: "Zombieland: Double Tap"
    }
};
console.log(zombieLand);
console.log(`${zombieLand.cast[2]} is my favorite actress!`);
console.log(zombieLand.sequel.name);
console.log(zombieLand.sequel.yearReleased);


//! Declare different variables of different types and practice those.

let x = 100;
let y = 123.45;
let z = "456.78";

console.log(x + y); //223.45
console.log(z + x); //456.78100
console.log(y - x);  //23.450000000000003

//!! Practice with the differences between `==` and `===`

let four = 4;
let fourString = "4";

console.log("four == fourString", four == fourString); //true
console.log("four === fourString", four === fourString); //false

//!! Modify the FizzBuzz problem to allow the user to choose a max integer. 
//!! (example: the user is prompted for a number, they choose 15, so the problem runs through the numbers 1 to 15)


let userPrompt = prompt("Enter a number between 1 and 100:");

for (i = 1; i <= userPrompt; i++ ) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}