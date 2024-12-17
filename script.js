// Store all Book created objects
const myLibrary = [];

// Constructor for the Book object
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status; // 'Read' or 'Not read'

  // Display attributes when printed
  this.toString = function() {
    return `${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nStatus: ${this.status ? 'Read' : 'Not read'}`;
  };
}

// Add Book objects to the library
function addBookToLibrary(author, title, pages, status) {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
}

// Display previously added books
function displayMyLibrary(myLibraryArray) {
  // Print added books into the console
  console.log(`Books added to the library:`)
  for (let i = 0; i < myLibraryArray.length; i++) {
    console.log(`[#${[([i + 1])]}]: ${myLibraryArray[i]}`);
  };

  // TODO: Display added books into page elements
  // WIP...
}

// Manually add a couple of books
addBookToLibrary("Epictetus", "The Handbook", 123, true);
addBookToLibrary("Marcus Aurelius", "Meditations", 231, true);
addBookToLibrary("Neal Stephenson", "Snow Crash", 440, false);

// Manually display the added books
displayMyLibrary(myLibrary);
