// 🚀 Day 41 Challenge: Start Coding! 🚀

// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.



for (let i = 1; i <= 10; i++) {

    if (i == 5) { continue; } // Skips the rest of the loop for i = 5

    console.log(i);

};

console.log(`\n`);

















// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.\



// Initializes the counter at 10
let count: number = 10;

// This while loop counts down from 10 to 1 and stops at 5.
while (count > 0) {

    if (count === 5) { break; }
    console.log(count);
    count--;


};

console.log(`\n`);












// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.


// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}

logUntilVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.