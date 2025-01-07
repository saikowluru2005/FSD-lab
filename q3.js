let person = {
    name: "John",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
        return this.age >= 18;
    }
};

console.log(person.isAdult());
person.greet();
