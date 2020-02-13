// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all
// of the parameters. if you haven't read the book, there should not be a
// startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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
      if (!this.endReadDate) {
        this.endReadDate =
          "I guess you forgot to return the book to our library, silly head!";
      }
    }
  }
}

let book1 = new Book(
  "Orange",
  "romance",
  "Hello",
  true,
  "2020-02-05",
  "2020-02-10"
);

let book2 = new Book("Icelandic", "drama", "Glacial", false);
let book3 = new Book(
  "The Road to learn React: Your journey to master plain yet pragmatic React.js",
  "technical",
  "Robin Wieruch",
  false
);

let book4 = new Book(
  "The Money Mafia: A World in Crisis",
  "conspiracy",
  "Paul T. Hellyer",
  false
);

let book5 = new Book(
  "Why We Hate Cheap Things",
  "philosophy",
  "Alain de Botton",
  true,
  "2020-01-03"
);

console.log(book1, book2, book3, book4, book5);
