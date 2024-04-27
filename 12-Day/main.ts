// 🚀 Day 12 Challenge: Start Coding! 🚀

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

// Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.


let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

// Printing just the name of each pizza
console.log("Printing just the names of the pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

// Printing a sentence using the name of each pizza
console.log("\nPrinting a sentence about each pizza:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");





// Question 35: Animals: Highlight animals with a common trait.

// Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.



let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing just the name of each animal
console.log("Printing just the names of the animals:");
for (let animal of animals) {
    console.log(animal);
}

// Printing a statement about each animal
console.log("\nPrinting a statement about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");




// Question 36: T-Shirt: Create a function for customizing t-shirts.

// Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.


function make_shirt(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

make_shirt("medium", "Hello, World!");



