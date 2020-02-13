// From 2.3
// Copy over all of the code from 2.3...

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.

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
  //          - set the startReadDate in the book object to new Date(Date now());
  startReading(title) {
    this.currentlyReading = title;
    this.books.forEach(book => {
      if (book.title === title) {
        book.startReadDate = new Date();
      }
    });
    return;
  }
  finishReading(title) {
    this.lastBookRead = title;
    this.books.forEach(book => {
      if (book.title === title) {
        book.read = true;
        book.endReadDate = new Date();
      }
    });
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

// console.log(homeLibrary.booksRead);
// console.log(homeLibrary.booksUnread);

// homeLibrary.startReading("Why We Hate Cheap Things");

// console.log(homeLibrary.books);

// homeLibrary.finishReading("The Money Mafia: A World in Crisis");
// console.log(homeLibrary.books);
