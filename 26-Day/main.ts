// 🚀 Day 26 Challenge: Start Coding! 🚀

// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.




function add_numbers(num1: number, num2: number): number {
    return num1 + num2
};

console.log(add_numbers(5, 7));
console.log(`\n`);









// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.




function greetUser(name: string = 'anonymous') {
    console.log(`Hello ${name} !`);
};


greetUser('Alice');
greetUser();
console.log(`\n`);















// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.




// Function declaration for squaring a number :
function myNumber(number: number): number {
    return number * number
};

console.log(myNumber(4));


// Function expression for squaring a number :
const fixed = function (number: number): number {
    return number * number
};
console.log(fixed(4));



