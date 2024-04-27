// 🚀 Day 5 Challenge: Start Coding! 🚀

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


const favorite: string[] = ['Honda', 'Toyota', 'BMW', 'Tesla', 'Yama'];

// for(let message of favorite){
//     console.log(`“I would like to own a ${message}.”`)
// };

favorite.forEach(favorite => {
    console.log(`I would like to own a ${favorite}.`)
});

console.log(`\n`);






// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const friends: string[] = ['Asim', 'Mohsin', 'Jawad'];
friends.forEach(friends => {
    console.log(`Dear ${friends}, would you like to join me for dinner?`);
});

console.log(`\n`);






// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

const notAttend: string = "Asim";
console.log(`${notAttend} can't make it to dinner.`);


// Replace the guest :

const newGuest: string = 'Farhan';


friends[friends.indexOf(notAttend)] = newGuest;
// console.log(friends);


// New invitations :
friends.forEach(friends => {
    console.log(`Dear ${friends}, would you like to join me for dinner?`)
});
