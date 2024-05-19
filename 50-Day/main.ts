// 🚀 Day 50 Challenge: Start Coding! 🚀

// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.


// Uses setTimeout to log a message after a 2-second delay
setTimeout(() => {
    console.log("This is a message  shown after a 2-second delay.");
  }, 2000);
  // This showcases how to use setTimeout to delay actions in your code.


console.log(`\n`);




// Question 149: Explain the concept of the event loop in JavaScript with an example.

// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.


console.log("Start");

setTimeout(() => {
  console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);

console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.


console.log(`\n`);









// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.

// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.








