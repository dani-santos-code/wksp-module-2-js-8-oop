class Book {
  constructor(
    title,
    genre,
    author,
    imageUrl,
    read,
    startReadDate,
    endReadDate
  ) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.imageUrl = imageUrl;
    this.read = read || false;
    this.startReadDate = startReadDate;
    this.endReadDate = endReadDate;
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
        this.endReadDate = new Date().toUTCString();
      }
    });
  }
}

let homeLibrary = new BookList();

let book1 = new Book(
  "Understanding ECMAScript6: The Definitive Guide for JavaScript Developers",
  "technical",
  "Nicholas C. Zakas",
  "https://images-na.ssl-images-amazon.com/images/I/512T%2Bd%2BVK6L._SX376_BO1,204,203,200_.jpg",
  true,
  "2019-03-20",
  "2019-03-18"
);

let book2 = new Book(
  "The Money Mafia: A World in Crisis",
  "conspiracy",
  "Paul T. Hellyer",
  "https://images-na.ssl-images-amazon.com/images/I/511lXeBO1WL._SX331_BO1,204,203,200_.jpg",
  false
);

let book3 = new Book(
  "Why We Hate Cheap Things",
  "philosophy",
  "Alain de Botton",
  "https://images-na.ssl-images-amazon.com/images/I/31Nr5aykrnL._SY346_.jpg",
  true,
  "2020-01-03"
);

let book4 = new Book(
  "Grit: Why passion and resilience are the secrets to success",
  "psychology",
  "Angela Duckworth",
  "https://images-na.ssl-images-amazon.com/images/I/51qj8ykhuuL._SX315_BO1,204,203,200_.jpg",
  false
);

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(
  new Book(
    "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    "self-help",
    "Mark Manson",
    "https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg",
    true,
    "2020-02-05",
    "2020-02-10"
  )
);

homeLibrary.add(
  new Book(
    "Crime and Punishment",
    "suspense",
    "Fyodor Dostoevsky",
    "https://images-na.ssl-images-amazon.com/images/I/41WYXBA5mrL._SX320_BO1,204,203,200_.jpg",
    false
  )
);
homeLibrary.finishReading("Why We Hate Cheap Things");
homeLibrary.startReading(
  "Grit: Why passion and resilience are the secrets to success"
);
