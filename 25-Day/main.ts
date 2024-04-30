// 🚀 Day 25 Challenge: Start Coding! 🚀

// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.

function updateVariable() {
    let value: number = 10; // Declare a variable using let and assign an initial value
    console.log("Initial value:", value); // Log the initial value

    // Update the value
    value = 20;
    console.log("Updated value:", value); // Log the updated value
}

// Call the function to see the result
updateVariable();

console.log(`\n`);












// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.


// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);

    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp

    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}

swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!

console.log(`\n`);





















// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.




// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);

    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition

    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction

    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication

    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}

useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.





