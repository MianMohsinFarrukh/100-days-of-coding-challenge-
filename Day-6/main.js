"use strict";
// 🚀 Day 6 Challenge: Start Coding! 🚀
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
const friends = ['Asim', 'Mohsin', 'Jawad'];
console.log("Great news! I found a bigger dinner table! \n");
// Adding more guests
friends.unshift("Faizan");
friends.splice(friends.length / 2, 0, "Arshad");
friends.push("Ali");
friends.forEach(final => {
    console.log(`Dear ${final}, would you like to join me for dinner?`);
});
console.log(`\n`);
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (friends.length > 2) {
    let removedGuest = friends.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
friends.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
friends.splice(0, friends.length);
console.log(friends); // Shows an empty list
console.log(`\n`);
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
