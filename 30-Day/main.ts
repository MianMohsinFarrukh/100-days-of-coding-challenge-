// 🚀 Day 30 Challenge: Start Coding! 🚀

// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.


// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num: number): number {
    return Math.round(num); // Rounds the number
}

// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.

console.log(`\n`);











// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.



// This function changes a string into a number
function convertStringToNumber(str: string): number {
    return parseFloat(str); // Converts the string to a number
}

// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// We're taking strings that look like numbers and turning them into actual numbers.
console.log(`\n`);












// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.




// This function checks if a value is Not a Number (NaN)
function isValueNaN(value: any): boolean {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}

// Examples: Checking different values
console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.


