class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.status = "available";
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        let book = this.books.find(b => b.title === title && b.status === "available");
        if (book) {
            book.status = "borrowed";
            console.log(`${title} borrowed`);
        } else {
            console.log("Book not available");
        }
    }
}
