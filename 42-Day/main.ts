// 🚀 Day 42 Challenge: Start Coding! 🚀

// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.


// Defines an object with a name property and a method to return its name
const person = {
    name: 'mohsin',
    getName: function () {
        return this.name // Uses 'this' to refer to the object itself and return its 'name' property
    },
};

console.log(person.getName()); // Outputs: Alice
// This method correctly identifies and returns the object's 'name' property using 'this'.
console.log(`\n`);







// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.



// An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
      return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
  };
  
  console.log(rectangle.calculateArea()); // Outputs: 20
  // The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.

  console.log(`\n`);
















//   Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.


// Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
      };
  
      innerMethod();
    },
  };
  
  myObject.outerMethod();
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.