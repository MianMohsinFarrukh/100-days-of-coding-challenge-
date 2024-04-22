//🚀 Day 4 Challenge: Start Coding! 🚀

//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.


// My Name is Mian Mohsin Farrukh .                    Date :    20/4/2024

//First Program : This is a student marksheet & print in a terminal ;

const markSheet: any = {

    studentName: "Mohsin Farrukh",
    rollNumber: 4979,
    class: 10,
    totalMarks: 550,

}
console.log(markSheet);



//Second Program : // This program prints a personName $ message ;

const personName: string = "Mohsin";
const message: string = `\n Hi my name is ${personName} , i am a web Developer .\n`;
console.log(message);








//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

const friendNames: string[] = ['Asim', 'Jawad', 'Ali', 'Moiz', 'Faizan'];
for (let i = 0; i < friendNames.length; i++) { console.log(friendNames[i]) };






//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.


const friendsNames: string[] = ['Asim', 'Jawad', 'Ali', 'Moiz', 'Faizan'];

for (let name of friendsNames) { console.log(`Hello ${name}, would you like to learn some TypeScript today?`) }

