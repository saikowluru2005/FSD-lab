class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    total() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}
