// Store all Book created objects
const myLibrary = [];

// Constructor for the Book object
function Book(author, title, pages, status) {
  this.id = crypto.randomUUID(); // Generate a unique ID
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status; // 'Read' or 'Not read'

  // Display attributes when printed
  this.toString = function() {
    return `${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nStatus: ${this.status ? 'Read' : 'Not read'}\nUUID: ${this.id}`;
  };
}

// Method to toggle book status
Book.prototype.toggleStatus = function() {
  this.status = !this.status;
};

// Add Book objects to the library
function addBookToLibrary(author, title, pages, status) {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
}

// Display previously added books
function displayMyLibrary(myLibraryArray) {
  // // Output books into the console (temporary validation)
  // console.log(`Books added to the library:`)
  // myLibraryArray.forEach((book, i) => console.log(`[#${i + 1}]: ${book}`));

  // Main book shelf display element
  const libraryShelf = document.querySelector('.library-shelf');
  libraryShelf.textContent = ""; // Clear previous display

  // Create and inject book elements
  myLibraryArray.forEach(book => {
    // Main book div to add each book
    const libraryBook = document.createElement('div')
    libraryBook.classList.add('library-book');
    libraryBook.setAttribute('data-id', book.id); // Store unique ID

    // Create the book title element
    const libraryBookTitle = document.createElement('p');
    libraryBookTitle.classList.add('library-book-title');
    libraryBookTitle.textContent = `${book.title}`;

    // Create book's details container
    const libraryBookDetails = document.createElement('div');
    libraryBookDetails.classList.add('library-book-details');

    // Create the book author element
    const libraryBookAuthor = document.createElement('p');
    libraryBookAuthor.textContent = `🙍‍♂️${book.author}`;

    // Create the book pages element
    const libraryBookPages = document.createElement('p');
    libraryBookPages.textContent = `📑${book.pages} pages`;

    // Create the book read status
    const libraryBookStatus = document.createElement('p');
    libraryBookStatus.textContent = `❓Status: `;

    // Dynamically change book status background color
    const statusSpan = document.createElement('span');
    statusSpan.textContent = book.status ? 'Read' : 'Not read';
    statusSpan.classList.add(book.status ? 'status-read' : 'status-not-read', 'status-span');
    libraryBookStatus.appendChild(statusSpan);

    // Add book details to it's container
    libraryBookDetails.append(
      libraryBookAuthor,
      libraryBookPages,
      libraryBookStatus,
    );

    // Create book card's buttons container
    const libraryBookBtns = document.createElement('div');
    libraryBookBtns.classList.add('library-book-buttons');

    // Create the Remove book button
    const removeBookButton = document.createElement('button');
    removeBookButton.textContent = `Remove`;
    removeBookButton.classList.add('remove-book-btn');

    // Create the Toggle Status button
    const toggleStatusButton = document.createElement('button');
    toggleStatusButton.textContent = `Toggle Status`;
    toggleStatusButton.classList.add('toggle-status-btn');

    // Add buttons container to the book card
    libraryBookBtns.append(
      toggleStatusButton,
      removeBookButton,
    );

    // Add created elements into the page
    libraryBook.append(
      libraryBookTitle,
      libraryBookDetails,
      libraryBookBtns,
    );

    // Add created book into the main shelf
    libraryShelf.appendChild(libraryBook);

    // Add event listener to remove book
    removeBookButton.addEventListener('click', () => removeBook(book.id));

    // Add event listener to toggle status
    toggleStatusButton.addEventListener('click', () => toggleStatus(book.id));
  });
}

// Function to remove book from library
function removeBook(bookId) {
  // Find the book index and remove it from the array
  const bookIndex = myLibrary.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) { myLibrary.splice(bookIndex, 1); }
  displayMyLibrary(myLibrary); // Refresh the display
}

// Toggle book status (Read/Not read)
function toggleStatus(bookId) {
  // Find the book by ID and toggle its status
  const book = myLibrary.find(book => book.id === bookId);
  if (book) { book.toggleStatus(); }
  displayMyLibrary(myLibrary); // Refresh the display
}

// Manually add a couple of books
addBookToLibrary("Epictetus", "The Handbook", 123, true);
addBookToLibrary("Marcus Aurelius", "Meditations", 231, true);
addBookToLibrary("Dmitry Glukhovsky", "Metro 2034", 332, false);
addBookToLibrary("Richard K. Morgan", "Altered Carbon", 544, false);

// Manually display the added books
displayMyLibrary(myLibrary);

// Book adding modal batch query
const pageContent = document.getElementById('pageContent');
const favDialog = document.getElementById("favDialog");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Add book" button opens the <dialog> modal
const addBookBtn = document.getElementById("addBookBtn");
addBookBtn.addEventListener("click", () => {
  favDialog.showModal();
  pageContent.classList.add("modal-blur");

  // Also add blur the header and footer
  document.querySelector(".header").classList.add("modal-blur");
  document.querySelector(".footer").classList.add("modal-blur");
});

// Dynamically position 'Add book' button
document.addEventListener("scroll", () => {
  const addBookElement = document.querySelector(".add-book");
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.innerHeight + window.scrollY;
  
  // Calculate how close we are to the bottom
  const distanceFromBottom = scrollHeight - scrollPosition;
  
  // Map the distance to the range [20px, 80px]
  const bottomValue = Math.min(80, Math.max(20, 80 - distanceFromBottom / 1));

  // Apply the new bottom position
  addBookElement.style.bottom = `${bottomValue}px`;
});

// "Cancel" button closes the form dialog
favDialog.addEventListener("close", () => {
  // Remove blur after the dialog is closed
  pageContent.classList.remove("modal-blur");

  // Also remove blue from the header and footer
  document.querySelector(".header").classList.remove("modal-blur");
  document.querySelector(".footer").classList.remove("modal-blur");

  // Reset form fields
  document.querySelector(".add-book-form").reset();
});

// Create a new book based on user input
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("book_Author").value.trim();
  const pages = parseInt(document.getElementById("bookPages").value);
  const status = document.getElementById("bookStatus").checked;

  // Validate input
  if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Add new book to library
  addBookToLibrary(author, title, pages, status);

  // Clear previous display and update the UI
  document.querySelector('.library-shelf').textContent = "";
  displayMyLibrary(myLibrary);

  // Close the dialog
  favDialog.close();

  // Remove blur after the dialog is closed
  pageContent.classList.remove("modal-blur");

  // Reset form fields
  document.querySelector(".add-book-form").reset();
});
