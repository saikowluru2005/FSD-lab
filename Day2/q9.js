class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.area());
