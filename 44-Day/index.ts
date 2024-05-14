// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.



import { add } from "./main";
import { person } from "./main";

console.log(add(3, 3));
console.log(`\n`);








// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.



const a = new person('mohsin');
a.greet();
console.log(`\n`);










// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.


import Calculator from "./main";


import { utilOne, utilTwo } from "./main";


// This code illustrates the syntax and usage differences between default and named exports.






