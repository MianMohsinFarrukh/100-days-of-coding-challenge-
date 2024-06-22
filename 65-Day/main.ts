// Day-65 of 100-Days-Of-Code Challenge
// Day-65 Task:

// Learn about TypeScript functions by using the following guide and coding along with the examples provided in it:

// Type Annotations With Function



/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
    return lengthRectAngle * widthOfRectAngle;
  }
  
  // Calling the function with valid arguments
  const lengthRectAngle = 5;
  const widthOfRectAngle = 3;
  const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
  console.log(`The area of the rectangle is: ${area}`);








  /**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional Parameters:
function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
      console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greetOptional("Alice"); // Output: "Hello, Alice!"
  greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
  
  // Default Parameters:
  function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
  greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."





  /**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// // Optional Parameters:
// function greetOptional(name: string, age?: number) {
//     if (age !== undefined) {
//       console.log(`Hello, ${name}! You are ${age} years old.`);
//     } else {
//       console.log(`Hello, ${name}!`);
//     }
//   }
  
//   greetOptional("Alice"); // Output: "Hello, Alice!"
//   greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
  
//   // Default Parameters:
//   function greetDefault(name: string, age: number = 25) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
//   }
  
//   greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
//   greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."





/******************
 * ARROW FUNCTION *
 ******************/

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30


/**********************
 * ANONYMOUS FUNCTION *
 **********************/

const add = function (num1: number, num2: number): number {
    return num1 + num2;
  };
  console.log(add(10, 20)); // Output: 30




  /****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  };