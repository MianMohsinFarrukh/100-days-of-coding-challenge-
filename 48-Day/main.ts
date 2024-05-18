// 🚀 Day 48 Challenge: Start Coding! 🚀

// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.



// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
  
  helloPromise.then((message) => console.log(message));
  // After 2 seconds, "Hello, World!" will be logged to the console.










//   Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

//   Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.


// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failure"));
    }
  });
  
  conditionalPromise
    .then((result) => console.log(result)) // Handles a successful resolution
    .catch((error) => console.log(error.message)); // Handles a rejection
  // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.















//   Question 144: Explain the use of the Promise.all() method with an example.

//   Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
  


// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [3, 42, "foo"]
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.







