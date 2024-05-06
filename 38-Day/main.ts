// 🚀 Day 38 Challenge: Start Coding! 🚀

// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

// Answer: Please try to do it yourself first!



// Creates a new Map to store countries and their capitals
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);
// Logs the Map with the countries and their capitals.
console.log(`\n`);







// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.


// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
      console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
      console.log("Canada is not in the Map.");
    }
  }
  
  // Assuming countries Map from Question 112
  logCapitalOfCanada(countries);
  // Checks if Canada is in our Map and logs the capital if it exists.
  console.log(`\n`);














//   Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.


// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.

