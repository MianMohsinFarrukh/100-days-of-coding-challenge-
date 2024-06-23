"use strict";
/*******************
 * CLASS ACCESSORS *
 *******************/
class ProductExAccessors {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    ;
    // 'public' getter for price
    get price() {
        return this._price;
    }
    ;
    // 'public' setter for price
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }
    ;
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
    ;
}
;
const productEx = new ProductExAccessors(1, "Mohsin");
console.log(productEx.getProductInfo());
