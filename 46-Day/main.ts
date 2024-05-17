
// 🚀 Day 46 Challenge: Start Coding! 🚀

// Question 136: Use console.log() to debug and track the value of a variable inside a loop.

// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.


// Demonstrates using console.log() inside a loop to track variable values
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}, i value:, i`); // Logs the current iteration number and the value of i
}
// This loop iterates five times, logging the value of 'i' during each iteration to help with debugging.

console.log(`\n`);









// Question 137: Implement a try-catch block to handle potential errors in a block of code.

// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.


// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error.message); // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.









//   Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables, step through code one line at a time, and understand how your code executes in real-time.


// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.








