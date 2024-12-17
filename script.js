// Store all Book created objects
const myLibrary = [];

// Constructor for the Book object
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status; // 'Read' or 'Not read'
}

// Add Book objects to the library
function addBookToLibrary(author, title, pages, status) {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
}

// The Handbook
addBookToLibrary("Epictetus", "The Handbook", 123, true);
console.log(myLibrary[0]);
