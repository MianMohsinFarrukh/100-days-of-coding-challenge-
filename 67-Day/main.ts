// Day-67 of 100-Days-Of-Code Challenge
// Day-67 Task:

// Learn about TypeScript arrays by using the following guide and coding along with the examples provided in it:

// Type Annotations With Arrays in TypeScript



/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
};



/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];