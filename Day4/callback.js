function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(name);
    }
    // greet('John', console.log);

function hi(name){
    console.log(`Hi, ${name}!`);
}
greet('Jane', hi);