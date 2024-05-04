// 🚀 Day 34 Challenge: Start Coding! 🚀

// Question 100: Use the JavaScript Math object to find the square root of 144.

// Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need.







// Finds the square root of 144 using Math.sqrt()
const squareRoot: number = Math.sqrt(144);

console.log(squareRoot); // Outputs: 12
// This line effectively calculates and shows the square root of 144.
console.log(`\n`);








// Question 101: Generate a random integer between 1 and 10.

// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.


// Generates a random integer between 1 and 10
function getRandomInt(): number {
    return Math.floor(Math.random() * 10) + 1;
};

console.log(getRandomInt()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.

console.log(`\n`);







// Question 102: Calculate and log the absolute difference between the number -5 and 5.

// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.


// Calculates the absolute difference between -5 and 5
const difference: number = Math.abs(-5 - 5);

console.log(difference); // Outputs: 10
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.






