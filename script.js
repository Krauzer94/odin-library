// Store all Book created objects
const myLibrary = [];

// Constructor for the Book object
function Book(author, title, pages, status) {
  // this.id = id; Automatically generated using the index
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

  // Main book shelf display element
  const libraryShelf = document.querySelector('.library-shelf');
  
  // Create and inject book elements
  myLibraryArray.forEach(book => {
    // Main book div to add each book
    const libraryBook = document.createElement('div')
    libraryBook.classList.add('library-book');

    // Create the book title element
    const libraryBookTitle = document.createElement('p');
    libraryBookTitle.textContent = `Title: ${book.title}`;

    // Create the book author element
    const libraryBookAuthor = document.createElement('p');
    libraryBookAuthor.textContent = `Author: ${book.author}`;

    // Create the book pages element
    const libraryBookPages = document.createElement('p');
    libraryBookPages.textContent = `Pages: ${book.pages}`;

    // Create the book read status
    const libraryBookStatus = document.createElement('p');
    libraryBookStatus.textContent = `Status: ${book.status ? 'Read' : 'Not read'}`;

    // Add created elements into the page
    libraryBook.appendChild(libraryBookTitle);
    libraryBook.appendChild(libraryBookAuthor);
    libraryBook.appendChild(libraryBookPages);
    libraryBook.appendChild(libraryBookStatus);

    // Add created book into the main shelf
    libraryShelf.appendChild(libraryBook);
  });
}

// Manually add a couple of books
addBookToLibrary("Epictetus", "The Handbook", 123, true);
addBookToLibrary("Marcus Aurelius", "Meditations", 231, true);
// addBookToLibrary("Neal Stephenson", "Snow Crash", 440, false);

// Manually display the added books
displayMyLibrary(myLibrary);
