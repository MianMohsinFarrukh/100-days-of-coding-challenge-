//🚀 Day 10 Challenge: Start Coding! 🚀

// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.









const age: number = 65;

if (age < 2) {
    console.log("The person is a baby.")
} else if (age < 4) {
    console.log("The person is a toddler.")
} else if (age < 13) {
    console.log("The person is a kid.")
} else if (age < 20) {
    console.log("The person is a teenager.")
} else if (age < 65) {
    console.log("The person is an adult.")
} else {
    console.log("The person is an elder.")
};











// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.


let favorite_fruits: string[] = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}

if (favorite_fruits.includes("pineapple")) {
    console.log("You really like pineapples!");
}








// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});












