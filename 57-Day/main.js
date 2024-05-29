// Day-57 of 100-Days-Of-Code Challenge
// Day-57 Task:

// Read the following Articles and Code along with it:

// Comparisons in JavaScript

// Conditional Operators: if, '?'(Ternary Operator) in JavaScript




"use strict";

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);