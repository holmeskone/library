const inputBook = document.getElementById("book-name");
const inputAuthor = document.getElementById("book-author");
const inputPages = document.getElementById("book-pages");
const inputRead = document.getElementById("book-read");
const submitBook = document.getElementById("submit-button");


const myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



// //Add book to myLibrary array and print it
function addBookToLibrary() {
    const bookName = inputBook.value;
    const bookAuthor = inputAuthor.value;
    const bookPages = inputPages.value;
    const bookRead = inputRead.value;
    let newBook = new Book(bookName,bookAuthor,bookPages,bookRead);
    myLibrary.push(newBook); // add input to array
    console.log(myLibrary); // print array
    // return false;  // Make the page not refresh when the form is submitted


};

function displayBook(){
    const lastBook = myLibrary[myLibrary.length - 1];
    // const parentDiv = document.getElementById('display-library');
    // const insertValue = document.createElement("p");
    // insertValue.innerHTML = `${lastBook.title}, ${lastBook.author}, ${lastBook.pages}, ${lastBook.read}`;
    // parentDiv.appendChild(insertValue);
    const row = document.createElement("tr"); // Create the row that will contain information on the book
    row.setAttribute("id", (myLibrary.length - 1));
    const titleCell = document.createElement("td"); // Create the "cell" for the first column starting from the left
    const titleInfo = document.createTextNode(`${lastBook.title}`);// Create the text for the data for the first column starting from the left
    const authorCell = document.createElement("td");
    const authorInfo = document.createTextNode(`${lastBook.author}`);
    const pagesCell = document.createElement("td");
    const pagesInfo = document.createTextNode(`${lastBook.pages}`);
    const readCell = document.createElement("td");
    const readInfo = document.createTextNode(`${lastBook.read}`);
    //Edit section
    const editCell = document.createElement("td");// Create the "cell" for the edit column 
    editCell.className = "edit-button-cell"
    const editButton = document.createElement('button');
    editButton.innerHTML = '✍️';    // Add the emoji for that section
    editButton.type = "button";
    editButton.className = "edit-button";
    editButton.onclick = function() {
        editBook(this.id);  // 'this' refers to the button element
      };
    editButton.setAttribute("id", ("edit-"+(myLibrary.length - 1)));
    editCell.appendChild(editButton);
    let trElement = editButton.parentElement;
    console.log(trElement);
    //Remove Section
    const removeCell = document.createElement("td"); // Create the "cell" for the delete column 
    removeCell.className = "remove-button-cell"
    const removeButton = document.createElement('button');
    removeButton.type = "button";
    removeButton.className = "remove-button";
    removeButton.onclick = function() { removeBook(this.id);  // 'this' refers to the button element
      };
    removeButton.innerHTML = '❌';
    removeButton.setAttribute("id", ("remove-"+(myLibrary.length - 1)));
    removeCell.appendChild(removeButton);
    titleCell.appendChild(titleInfo);
    authorCell.appendChild(authorInfo);
    pagesCell.appendChild(pagesInfo);
    readCell.appendChild(readInfo);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(editCell);
    row.appendChild(removeCell);
    const tblBody = document.getElementById('table-data');
    tblBody.appendChild(row);
    let tbodyelement = trElement.closest("tr");
    console.log(tbodyelement.children);
    
};

function removeBook(clickedId){
    let removeRow = clickedId.replace('remove-', "");
    document.getElementById(removeRow).remove();
}

function editBook(clickedId){
    // Get the parent row of the clicked button
    let editRow = clickedId.replace('edit-', "");
    let editTitleCell = document.getElementById(editRow).cells[0];
    let editAuthorCell = document.getElementById(editRow).cells[1];
    let editPagesCell = document.getElementById(editRow).cells[2];
    let editReadCell = document.getElementById(editRow).cells[3];
    let editTitleInput =
                prompt("Enter the updated title:",
                    editTitleCell.innerHTML);
    let editAuthorInput =
                prompt("Enter the updated author:",
                    editAuthorCell.innerHTML);
    let editPagesInput =
                prompt("Enter the updated number of pages:",
                    editPagesCell.innerHTML);

    let editReadInput =
                prompt("Enter the updated status:",
                    editReadCell.innerHTML);

    editTitleCell.innerHTML = editTitleInput;
    editAuthorCell.innerHTML = editAuthorInput;
    editPagesCell.innerHTML = editPagesInput;
    editReadCell.innerHTML = editReadInput;
}
