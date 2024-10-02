const inputBook = document.getElementById("book-name");
const inputAuthor = document.getElementById("book-author");
const inputPages = document.getElementById("book-pages");
const inputRead = document.getElementById("book-read");
const submitBook = document.getElementById("submit-button");


const myLibrary = [];

function Book() {
  // the constructor...

}



//Add book to myLibrary array and print it
function addBookToLibrary() {
  // do stuff here
    addBook = inputBook.value; // Gets the inputed value 
    myLibrary.push(addBook); // add input to array
    console.log(myLibrary); // print array
    return false;  // Make the page not refresh when the form is submitted
};

// Display value of inputted book 
document.querySelector("form.add-book").addEventListener("submit", function(event) { // Trigger this function when the submit type has been clicked
    event.preventDefault(); // Make the page not refresh when the form is submitted
    document.getElementById("display").innerText = inputBook.value; // add value of book-name (input) into the div 'display'
    inputBook.value = '';

});

//Display value in a table
function createTable(){

    // creates a <table> element, a <thead> and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    if (myLibrary.length < 2){
    const thead = document.createElement("thead");
    //creates a header for the table
    const headerRow = document.createElement("tr");

    //Titles of each header in the table
    const headers = ['Title', 'Author', 'Number of Pages', 'Status', 'Edit', 'Remove']

    // Create 7 columns for the header
    for (let i = 0; i < headers.length; i++) {
        const headerCell = document.createElement("th"); // each cell of in the table column
        const headerText = document.createTextNode(headers[i]);
        headerCell.appendChild(headerText); // Add the text to the table header
        headerRow.appendChild(headerCell); // Add each table header to the table row
    }

    //Adds header table row to the table head
    thead.appendChild(headerRow)

    //Creates the rows of the table corresponding to the books
    for (i=0; i<myLibrary.length; i++){
        const row = document.createElement("tr");
        for(j=0; j<6; j++){
            const cell = document.createElement("td");
            if(j===0){
            const cellText = document.createTextNode(inputBook.value);
            cell.appendChild(cellText);
        }
            row.appendChild(cell);
        }
        tblBody.appendChild(row)    
    }
    tbl.appendChild(thead); //Add the thead to the table
    tbl.appendChild(tblBody); // Add the table body to the table
    document.body.appendChild(tbl);
    }
    else{
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const cellText = document.createTextNode(inputBook.value);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody); // Add the table body to the table
        document.body.appendChild(tbl);
    }

}

//Add pop-up when adding a book
