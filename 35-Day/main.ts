// 🚀 Day 35 Challenge: Start Coding! 🚀

// Question 103: Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.

// This function returns a random boolean value
function getRandomBoolean(): boolean {
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}

console.log(getRandomBoolean()); // Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.

console.log(`\n`);












// Question 104: Create a function that generates a random hexadecimal color code.

// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.


// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return color; // Returns the random color code
}

console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
console.log(`\n`);















// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.


// This function simulates rolling a dice and returns a number between 1 and 6
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
};

console.log(rollDice()); // Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.








