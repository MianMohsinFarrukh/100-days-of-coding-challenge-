// 🚀 Day 11 Challenge: Start Coding! 🚀

// Question 31: No Users: Ensure your user list isn’t empty.


let userNames: string[] = [];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let userName of userNames) {
        if (userName === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    }
};










// Question 32: Checking Usernames: Ensure uniqueness in usernames.

// Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.


let current_users: string[] = ["Mohsin", "Ali", "Asim", "Jawad", "Farhan"];
let new_users: string[] = ["Asim", "farhan", "umer", "Asif", "Shoaib"];

for (let new_username of new_users) {
    let usernameExists = false;
    for (let existing_username of current_users) {
        if (existing_username.toLowerCase() === new_username.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username "${new_username}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_username}" is available.`);
    }
};






// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let a = "th";
    if (number === 1) {
        a = "st";
    } else if (number === 2) {
        a = "nd";
    } else if (number === 3) {
        a = "rd";
    }
    console.log(`${number}${a}`);
});

