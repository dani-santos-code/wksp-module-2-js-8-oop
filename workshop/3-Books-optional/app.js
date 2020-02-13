// Someone viewing your page should
// - see all of the books in your library.
// - see the book that you are currently reading.
// - see that last book you finished reading, and the date

const bookList = homeLibrary.books;
const bookListDiv = document.querySelector(".mybooks-list");
const lastReadDiv = document.querySelector(".last-read");
const currentlyReadingDiv = document.querySelector(".currently-reading");

bookList.forEach(book => {
  const card = document.createElement("div");
  const subtitle = document.createElement("h2");
  const bookImage = document.createElement("img");
  bookImage.setAttribute("src", `${book.imageUrl}`);
  bookListDiv.appendChild(card);
  card.appendChild(subtitle);
  card.appendChild(bookImage);
  bookImage.style.width = "100px";
  bookImage.style.height = "150px";
  card.classList.add("card");
  card.style.width = "200px;";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.justifyContent = "space-evenly";
  subtitle.innerText = `${book.title}\n`;
  subtitle.style.fontSize = "15px";
  card.style.width = "250px";
  card.style.height = "250px";
});

// Last Book Read
const subtitleLastRead = document.createElement("h2");
const bookImgLastRead = document.createElement("img");
bookImgLastRead.style.width = "100px";
subtitleLastRead.style.fontSize = "15px";
lastReadDiv.appendChild(subtitleLastRead);
lastReadDiv.appendChild(bookImgLastRead);
lastReadDiv.style.display = "flex";
lastReadDiv.style.flexDirection = "column";
lastReadDiv.style.justifyItems = "center";
lastReadDiv.style.marginBottom = "20px";
lastReadDiv.style.width = "270px";

bookList.forEach(book => {
  if (book.title === homeLibrary.lastBookRead) {
    bookImgLastRead.setAttribute("src", `${book.imageUrl}`);
  }
});

subtitleLastRead.innerText = `${homeLibrary.lastBookRead} on ${homeLibrary.endReadDate}`;

// Currently Reading

const subtitleCurrentlyReading = document.createElement("h2");
const bookImgCurrentlyReading = document.createElement("img");
bookImgCurrentlyReading.style.width = "100px";
subtitleCurrentlyReading.style.fontSize = "15px";
currentlyReadingDiv.appendChild(subtitleCurrentlyReading);
currentlyReadingDiv.appendChild(bookImgCurrentlyReading);
currentlyReadingDiv.style.display = "flex";
currentlyReadingDiv.style.flexDirection = "column";
currentlyReadingDiv.style.justifyItems = "center";
currentlyReadingDiv.style.width = "270px";
currentlyReadingDiv.style.marginBottom = "20px";

bookList.forEach(book => {
  if (book.title === homeLibrary.currentlyReading) {
    bookImgCurrentlyReading.setAttribute("src", `${book.imageUrl}`);
  }
});

subtitleCurrentlyReading.innerText = `${homeLibrary.currentlyReading}`;
