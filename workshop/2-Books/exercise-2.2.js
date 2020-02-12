// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - booksread (0 to start)
//      - bookUnread (0 start)
//      - books (empty array)
//      - reference to last book read (null for now)
//      - reference to book currently reading (null for now)
//      - reference to book that is upNext (null for now)
//
// Then intantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
  constructor() {
    this.booksRead = 0;
    this.booksUnread = 0;
    this.books = [];
    this.lastBookRead = null;
    this.currentlyReading = null;
    this.upNext = null;
  }
}

let homeLibrary = new BookList();

console.log(homeLibrary);
