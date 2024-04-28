// 🚀 Day 18 Challenge: Start Coding! 🚀

// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.



// Sets up details about a smartphone
let smartphone = {
    make: "Apple",
    model: "i phone 14 pro",
    moreDetails: {
        storage: "256GB",
        screenSize: "6.1 inches",
        batteryLife: "22 hours"
    }
};

// Shows what we've set up about the smartphone
console.log(smartphone);
console.log(`\n`);











// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.



// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};


// Getting specific skills from the list
const { languages, frameworks, tools } = developerSkills;


// Showing a skill from each category
console.log(`Language: ${languages[1]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
console.log(`\n`);
















// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.





// Define types for section names and section data
type SectionNames = {
    main: string;
    secondary: string;
};

type SectionData = {
    [key: string]: string[]; // An object with string keys and string array values
};

// User's selected section names
const sectionNames: SectionNames = {
    main: 'Skills',
    secondary: 'Projects'
};

// Data organized by section
const sectionData: SectionData = {
    [sectionNames.main]: ['JavaScript', 'Python', 'React'],
    [sectionNames.secondary]: ['Project A', 'Project B', 'Project C']
};

// Function to retrieve data from a section
function getData(sectionName: string): string[] {
    return sectionData[sectionName] || [];
}

// Example usage
console.log(`Section: ${sectionNames.main}`);
console.log(getData(sectionNames.main));
console.log(`Section: ${sectionNames.secondary}`);
console.log(getData(sectionNames.secondary));

