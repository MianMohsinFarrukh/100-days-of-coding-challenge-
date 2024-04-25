// 🚀 Day 8 Challenge: Start Coding! 🚀

// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.



let friends: string[] = ["Asim", "Mohsin", "Jawad"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Jawad"; // Correcting the error by accessing a valid index.










// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.


// Test :01 ;
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


// Test :02 ;
let myCar: string = "subaru";
console.log("Is myCar != 'Toyota'? I predict True.");
console.log(myCar == 'subaru');


// Test :03 ;
let honda: string = "subaru";
console.log("Is honda != 'Toyota'? I predict false.");
console.log(honda == 'subaru');

// Test :04 ;
let capital: string = "SUBARU";
console.log("Is capital == 'Toyota'? I predict True.");
console.log(capital != 'subaru');

// Test :05 ;
let newItem: string = "Honda";
console.log("Is newItem == 'Toyota'? I predict True.");
console.log(newItem == 'Honda');







// Test :06 ;
let carLength: string = "Honda";
console.log("Is carLength.length == 8? I predict True.");
console.log(carLength.length == 6);


// Test :07 ;
let newCar: string = "Honda";
console.log("Is newCar == 'Toyota'? I predict True.");
console.log(newCar == "Toyota");


// Test :08 ;
let oldCar: string = "subaru";
console.log("Is oldCar == 'Toyota'? I predict True.");
console.log(oldCar == "Toyota");



// Test :09 ;
let n1: number = 25;
let n2: number = 27;
console.log("Is n1 : '25' == n2 : '27' ? I predict True.");
console.log(n1 == n2);

// Test : 10 ;
let no1: number = 50;
let no2: any = 50;
console.log("Is no1 : '50' !== no2 : '50' ? I predict True.");
console.log(no1 !== no2);













// 24 --- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 1• Tests for equality and inequality with strings

// 2• Tests using the lower case function

// 3• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// 4• Tests using "and" and "or" operators

// 5• Test whether an item is in a array

// 6• Test whether an item is not in a array









// 1• Tests for equality and inequality with strings :
// inequality strings :

let name_1: string = "Mohsin";
let name_2: string = "Asim";
let name_3: string = "Ali";

if (name_1 === name_2) { console.log(`Names are equal `) }

else {
    console.log(`Names are  not equal `)
};


//equality strings :

if (name_1 != name_3) {
    console.log(`Names are equal `)
}
else {
    console.log(`Names are  not equal `)
};







// 2• Tests using the lower case function :

let string3: string = "HELLO";
let string4: string = "hello";

// Lowercase test
console.log(string3.toLowerCase() === string4);








// 3• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to :

let num1: number = 25;
let num2: number = 50;

// Equality and inequality tests :
console.log(num1 === num2);
console.log(num1 !== num2);

// Greater than and less than tests :
console.log(num1 > num2);
console.log(num1 < num2);

// Greater than or equal to and less than or equal to tests :
console.log(num1 >= num2);
console.log(num1 <= num2);






// 4• Tests using "and" and "or" operators

let a: number = 5;
let b: number = 10;
let c: number = 15;

// "and" operator test
console.log(a < b && b < c);

// "or" operator test
console.log(a < b || a > c);







// 5• Test whether an item is in a array :

let fruits: string[] = ["apple", "banana", "orange"];

// In array test
console.log(fruits.includes("banana"));










// 6• Test whether an item is not in a array:

let fruit: string[] = ["apple", "banana", "orange"];

// Not in array test
console.log(!fruit.includes("grape")); 
