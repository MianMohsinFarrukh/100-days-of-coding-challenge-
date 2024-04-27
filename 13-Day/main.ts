// 🚀 Day 13 Challenge: Start Coding! 🚀

// Question 37: Large Shirts: Default values in make_shirt().

// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.


function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("medium");

// Making a shirt of any size with a different message
make_shirt("small", "Hello, World!");










// Question 38: Cities: Describing cities with a function.

// Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.

function myCity(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
myCity("Karachi");
myCity("Paris", "France");
myCity("New York", "USA");









// Question 39: City Names: Formatting city-country pairs.

// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Sydney", "Australia"));


