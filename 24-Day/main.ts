// 🚀 Day 24 Challenge: Start Coding! 🚀

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

// Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.


// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        // Uses `let` for loop variable `i`
        console.log(i); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}

printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
console.log(`\n`);













// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.


// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const myName :string= "Alice";
try {
    myName = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
console.log(`\n`);



















// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.




// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}

try {
    console.log(blockLet); // This will fail
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); // This will also fail
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.