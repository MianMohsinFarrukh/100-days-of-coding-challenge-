// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.


// In file: mathFunctions.ts
export const add = (a: number, b: number): number => a + b;
// This line exports an add function from mathFunctions.ts



export class person {
    name: string;
    constructor(name: string) { this.name = name;

     };
     greet (){
        console.log(`Hello, my name is ${this.name}`);
     }
};



export default class Calculator {
    // Class definition
  };



  // Named export example in file: utils.ts
export const utilOne = () => {
    /*...*/
  };
  export const utilTwo = () => {
    /*...*/
  };