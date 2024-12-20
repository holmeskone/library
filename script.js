// Select form inputs
const inputBook = document.getElementById("book-name");
const inputAuthor = document.getElementById("book-author");
const inputPages = document.getElementById("book-pages");
const inputRead = document.getElementById("book-read");
const submitBook = document.getElementById("submit-button");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.myLibrary = []; // Array to store books
    }

    addBook(bookName, bookAuthor, bookPages, bookRead) {
        const newBook = new Book(bookName, bookAuthor, bookPages, bookRead);
        this.myLibrary.push(newBook); // Add book to the library array
        this.displayBook(); // Call displayBook to render the book on the table
    }

    displayBook() {
        const lastBook = this.myLibrary[this.myLibrary.length - 1]; // Get the latest book
        const row = document.createElement("tr"); // Create the row
        row.setAttribute("id", this.myLibrary.length - 1); // Set the row ID

        // Create cells for book details
        const titleCell = document.createElement("td");
        const authorCell = document.createElement("td");
        const pagesCell = document.createElement("td");
        const readCell = document.createElement("td");

        titleCell.textContent = lastBook.title;
        authorCell.textContent = lastBook.author;
        pagesCell.textContent = lastBook.pages;
        readCell.textContent = lastBook.read;

        // Add Edit Button
        const editCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "✍️";
        editButton.type = "button";
        editButton.className = "edit-button";
        editButton.onclick = () => this.editBook(row.id); // Bind the instance method
        editCell.appendChild(editButton);

        // Add Remove Button
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.onclick = () => this.removeBook(row.id); // Bind the instance method
        removeCell.appendChild(removeButton);

        // Append all cells to the row
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(editCell);
        row.appendChild(removeCell);

        // Append the row to the table body
        document.getElementById("table-data").appendChild(row);
    }

    removeBook(rowId) {
        document.getElementById(rowId).remove(); // Remove the row from the DOM
        this.myLibrary.splice(rowId, 1); // Remove the book from the array
    }

    editBook(rowId) {
        const row = document.getElementById(rowId);
        const cells = row.children;

        const updatedTitle = prompt("Enter the updated title:", cells[0].textContent);
        const updatedAuthor = prompt("Enter the updated author:", cells[1].textContent);
        const updatedPages = prompt("Enter the updated number of pages:", cells[2].textContent);
        const updatedRead = prompt("Enter the updated read status:", cells[3].textContent);

        cells[0].textContent = updatedTitle;
        cells[1].textContent = updatedAuthor;
        cells[2].textContent = updatedPages;
        cells[3].textContent = updatedRead;

        this.myLibrary[rowId] = new Book(updatedTitle, updatedAuthor, updatedPages, updatedRead); // Update the library array
    }
}

// Create an instance of the Library class
const library = new Library();

// Add form submit event listener
const form = document.getElementById("add-book");
form.onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    library.addBook(inputBook.value, inputAuthor.value, inputPages.value, inputRead.value);
    form.reset(); // Reset the form fields
};


// Using Constraint Validation API to customise message on the library inputs

const authorInput = document.getElementById('book-author')

authorInput.addEventListener('input', (event)=> {
 if(authorInput.validity.patternMismatch){
    authorInput.setCustomValidity('Please enter a name with no numbers');
 }
 else{
    authorInput.setCustomValidity('');
 }})
;

const readInput = document.getElementById('book-read')
readInput.addEventListener('input', (event)=> {
const regex =  /\b(not\s+)?read(ing)?\b/i;
 if(!regex.test(readInput.value)){
    readInput.setCustomValidity('Please enter Read or Not Read');
 }
 else{
    readInput.setCustomValidity('');
 }})
;