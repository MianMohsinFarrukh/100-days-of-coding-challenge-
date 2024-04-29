// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!














// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.

console.log(`\n`);



















// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!

// Function to create a custom adder
function createAdder(numToAdd: number): (num: number) => number {
    // Return a function that adds the specified number to any other number
    return function (num: number): number {
        return num + numToAdd;
    };
}

// Create a custom adder that adds 5 to any number
const addFive = createAdder(5);

// Test the custom adder
console.log(addFive(10)); // Output: 15 (10 + 5)
console.log(addFive(20)); // Output: 25 (20 + 5)
console.log(addFive(-3)); // Output: 2 (-3 + 5)


console.log(`\n`);















// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.


// This profile sets itself up and can share info about the user
let userProfile = (function () {
    // The user's details are kept inside
    let name = "John";
    let age = 30;

    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.