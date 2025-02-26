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

// Book adding modal batch query
const pageContent = document.getElementById('pageContent');
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Add book" button opens the <dialog> modal
const addBookBtn = document.getElementById("addBookBtn");
addBookBtn.addEventListener("click", () => {
  favDialog.showModal();
  pageContent.classList.add("modal-blur");
});

// Temporary "Show the dialog" trigger for modal
const showButton = document.getElementById("showDialogBtn");
showButton.addEventListener("click", () => {
  favDialog.showModal();
  pageContent.classList.add("modal-blur");
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
  pageContent.classList.remove("modal-blur");
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
  pageContent.classList.remove("modal-blur");
});
