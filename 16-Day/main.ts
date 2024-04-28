// 🚀 Day 16 Challenge: Start Coding! 🚀

// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.



const laptop: any = {

    name: 'Dell',
    model: 'XPS 16',
    year: 2022,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.name} ${this.model}.`)
    }

};

laptop.describe();










// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.



const laptops: {
    make: string;
    model: string;
    year: number;
}[] = [

        { make: 'Dell', model: 'XPS 13', year: 2022 },
        { make: 'Apple', model: 'MacBook Pro', year: 2021 },
        { make: 'HP', model: 'Spectre x360', year: 2023 },

    ];


const [firstlaptop, secondlaptop, thirdlaptop] = laptops;
console.log('\n');

console.log(firstlaptop);
console.log(secondlaptop);
console.log(thirdlaptop);










// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.


const set1: number[] = [1200, 1500, 900];
const set2: number[] = [1200, 1500, 900];

// Combining arrays using the spread operator and sorting in ascending order:
const combinedSet3: number[] = [...set1, ...set2].sort((a, b) => a - b);


// Logging the combined and sorted array :
console.log('\n');
console.log(combinedSet3);