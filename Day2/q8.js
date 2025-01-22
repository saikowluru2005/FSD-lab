function Animal() {}
Animal.prototype.speak = function () {
    console.log("Animal speaks");
};

let dog = new Animal();
dog.__proto__.bark = function () {
    console.log("Dog barks");
};

dog.speak();  
dog.bark();
