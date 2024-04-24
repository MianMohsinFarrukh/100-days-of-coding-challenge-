// 🚀 Day 7 Challenge: Start Coding! 🚀

// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.


const friends: string[] = ['Asim', 'Mohsin', 'Jawad', 'Ali', 'Faizan'];

console.log(friends.length);
console.log(`I am inviting ${friends.length} people to dinner.`);







// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


let country: string[] = ["China", "Pakistan", "Afghanistan", "Iran", "India"];

console.log("\nList of countries:\n");

for (let i = 0; i < friends.length; i++) { console.log(`Countries I'd like to visit : ${country[i]}`) };





// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



let person: { fName: string, lName: string, age: number, rollNo: number } =

{
    fName: "mohsin",
    lName: "farrukh",
    age: 25,
    rollNo: 89,
}
console.log(`\n`);

console.log(person);
