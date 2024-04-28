
// 🚀 Day 17 Challenge: Start Coding! 🚀

// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.







// Function with rest parameter representing multiple hobbies :
// Defines a function that accepts multiple hobbies as arguments :

function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array :
    // Logs a statement for each hobby:
    hobbies.forEach(hobby => { console.log(`I enjoy ${hobby}.`) });

};


logHobbies('reading', 'painting', 'playing guitar');
console.log(`\n`);













// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.


const description: string = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;



// Logging the ideal day description :
console.log(description);
console.log(`\n`);









// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.



// Orignal function to calculate the area of a rectangle :
function calculateArea(width: number, height: number): number {
    return width * height
};



// Refactored into an arrow function :
let calculateAreaArrow = (width: number, height: number): number => width * height;


// Example usage of the arrow function :
// console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle

// // Test
const width = 5;
const height = 10;
console.log(`Area of rectangle with width ${width} and height ${height} is: ${calculateAreaArrow(width, height)}`);
console.log(`\n`);

