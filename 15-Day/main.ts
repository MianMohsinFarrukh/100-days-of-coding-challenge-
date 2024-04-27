// 🚀 Day 15 Challenge: Start Coding! 🚀

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.



function make_great(magicians: string[]): string[] {
    // Create a copy of the array
    let modifiedMagicians: string[] = [...magicians];
    // Modify the copy by adding "the Great" to each magician's name
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }
    // Return the modified copy
    return modifiedMagicians;
}

// Function to print the magician's names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Mohsin", "Asim", "Jawad", "Fawad"];


// Call make_great() with a copy of the array to leave the original array unchanged
let great_magicians: string[] = make_great([...magician_names]);

// Call show_magicians() with the original array and the modified copy
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);











// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.


function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");











// Question 45: Cars: Create detailed car objects with flexible properties.

// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.



function store_car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): { manufacturer: string, model: string, details: { [key: string]: any } } {
    let car_info: { manufacturer: string, model: string, details: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        details: {}
    };

    // Store additional details :

    for (let detail of details) {
        for (let key in detail) {
            car_info.details[key] = detail[key];
        }
    }

    return car_info;
}

// Calling the function with required information and additional details :
let car = store_car_info("Toyota", "Camry", { color: "Red", year: 2022, price: 25000 });

// Printing the object to ensure all information was stored correctly :
console.log(car);


