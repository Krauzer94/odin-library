const myLibrary = [];

// Constructor for the Book object
function Book(author, title, pages, status) {
  this.bookAuthor = author;
  this.bookTitle = title;
  this.bookPages = pages;
  this.bookStatus = status; // 'Read' or 'Not read'
}

// Add Book objects to the library
function addBookToLibrary() {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
}
