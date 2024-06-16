// Day-64 of 100-Days-Of-Code Challenge
// Day-64 Task:

// Learn about TypeScript objects by using the following guide and coding along with the examples provided in it:

// Type Annotations with Objects in TypeScript




/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let personExOne: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  };
  
  personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };
    
  // And there is yet another method
  let personExTwo: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };