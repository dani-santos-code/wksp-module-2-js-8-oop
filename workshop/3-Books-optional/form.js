const submitForm = () => {
  const newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("genre").value,
    document.getElementById("url").value
  );
  homeLibrary.add(newBook);

  console.log(homeLibrary.books);
};
