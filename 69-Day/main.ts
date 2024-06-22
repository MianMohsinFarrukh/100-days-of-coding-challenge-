// Day-69 of 100-Days-Of-Code Challenge
// Day-69 Task:

// Learn about TypeScript enums by using the following guide and coding along with the examples provided in it:

// Enums in TypeScript.



/*********
 * ENUMS *
 *********/

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  
  const today: Days = Days.Wednesday;
  
  console.log(`Today is ${Days[today]}`);
