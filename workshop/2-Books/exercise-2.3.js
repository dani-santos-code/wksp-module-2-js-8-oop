// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

class Book {
  constructor(title, genre, author, read, startReadDate, endReadDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read || false;
    this.startReadDate = startReadDate;
    this.endReadDate = endReadDate;
    if (!this.read) {
      this.startReadDate = "Please read it, my friend";
      this.endReadDate =
        "Please read it, finish it and don't forget to return it!";
    } else {
      if (!this.endReadDate || !this.startReadDate) {
        this.startReadDate = "This info is missing in our system";
      }
      this.endReadDate =
        "I guess you forgot to return the book to our library, silly head!";
    }
  }
}

class BookList extends Book {
  constructor() {
    super();
    this.booksRead = 0;
    this.booksUnread = 0;
    this.books = [];
    this.lastBookRead = null;
    this.currentlyReading = null;
    this.upNext = null;
  }
  add(book) {
    if (book.read) {
      this.booksRead += 1;
    } else {
      this.booksUnread += 1;
    }
    this.books.push(book);
  }
}

let homeLibrary = new BookList();

let book1 = new Book(
  "Understanding ECMAScript6: The Definitive Guide for JavaScript Developers",
  "technical",
  "Nicholas C. Zakas",
  true,
  "2019-03-20",
  "2019-03-18"
);

let book2 = new Book(
  "The Money Mafia: A World in Crisis",
  "conspiracy",
  "Paul T. Hellyer",
  false
);

let book3 = new Book(
  "Why We Hate Cheap Things",
  "philosophy",
  "Alain de Botton",
  true,
  "2020-01-03"
);

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(
  new Book("Orange", "romance", "Hello", true, "2020-02-05", "2020-02-10")
);

console.log(homeLibrary.books);
console.log(homeLibrary.booksRead);
console.log(homeLibrary.booksUnread);
