// 🚀 Day 43 Challenge: Start Coding! 🚀

// Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.


// Traditional function expression
const traditionalFunction = function (a:number, b:number) {
    return a + b;
};

// Converted to arrow function
const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 3)); // Outputs: 8
// Demonstrates the conversion of a traditional function expression to an arrow function.

console.log(`\n`);








// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.



// Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
  
  console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
  // This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.








//   Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.






// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  // This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.