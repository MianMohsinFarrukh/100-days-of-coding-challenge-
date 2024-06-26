// Day-71 of 100-Days-Of-Code Challenge
// Day-71 Task:

// Learn about TypeScript classes by using the following guide and coding along with the examples provided in it:

// Class Type Annotations in TypeScript :



class product {
    // Property type annotations
    id: number;
    name: string;
    price: number;

    // Constructor parameter type annotations
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    };


    // Method type annotations:
    productinfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    };

};

// Create an instance of the Product class :
const product1 = new product(450, "pen", 25);

// Access class properties and call a method
console.log(product1.productinfo()); // Output: ID: 450, Name: pen, Price: $25


console.log(`\n`);






/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

// Class  Public :

class Mypublicclass {
    public name: string;

    constructor(name: string) {
        this.name = name;
    };

};

const pt = new Mypublicclass('mohsin');
console.log(pt.name);

console.log(`\n`);


// Class  Private :

class Myprivateclass {
    private name: string;

    constructor(name: string) {
        this.name = name

    };

    mymethod() {
        console.log(this.name);
    };
   // Accessing the private property from within the class
};

const nt = new Myprivateclass('Jawad');
console.log(nt);

// console.log(nt.name); // This would result in an error because name is private
// nt.mymethod(); // This is a valid way to access the private property

console.log(`\n`);






