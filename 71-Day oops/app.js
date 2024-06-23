"use strict";
/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/
class Parent {
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.name}`);
    }
    ;
}
;
const lt = new Parent('Arshad');
const mt = new child('Asim Arshad');
// console.log(lt.name); // This would result in an error because name is protected.
// console.log(mt.name); // This would result in an error because name is protected.
mt.introduceFamily(); // This is a valid way to access the protected property.
