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
//   // do stuff here
//     addBook = inputBook.value; // Gets the inputed value 
//     myLibrary.push(addBook); // add input to array
    // console.log(myLibrary); // print array
    return false;  // Make the page not refresh when the form is submitted

};

// Display value of inputted book 
document.querySelector("form.add-book").addEventListener("submit", function(event) { // Trigger this function when the submit type has been clicked
    event.preventDefault(); // Make the page not refresh when the form is submitted
    const bookName = inputBook.value;
    const bookAuthor = inputAuthor.value;
    const bookPages = inputPages.value;
    const bookRead = inputRead.value;
    let newBook = new Book(bookName,bookAuthor,bookPages,bookRead);
    myLibrary.push(newBook);
    console.log(newBook);
    const parentDiv = document.getElementById('display-library');
    const insertValue = document.createElement("p");
    insertValue.className = 'book-information';
    const book = document.getElementsByClassName("book-information").innerHTML ='title ' + newBook.title + ', Author ' + newBook.author + ', Pages ' + newBook.pages + ', Status ' + newBook.read; // add value of book-name (input) into the div 'display'
    const booknode = document.createTextNode(book);
    parentDiv.appendChild(booknode);

    // if(myLibrary.length<=1){
    //     insertValue.className = 'book-information'
    //     insertValue.id = "book-0";
    //     const displayDiv = document.createElement("div");
    //     displayDiv.className = "display-book";
    //     displayDiv.appendChild(insertValue);
    //     displayBooks.appendChild(displayDiv);
    //     document.getElementById("book-0").innerHTML ='title ' + newBook.title + ', Author ' + newBook.author + ', Pages ' + newBook.pages + ', Status ' + newBook.read; // add value of book-name (input) into the div 'display'
    //     }
    
    // else{
    //     for(i=0; i<myLibrary.length; i++){
    //         const displayDiv = document.createElement("div");
    //         displayDiv.className = "display-book";
    //         const insertValue = document.createElement("p");
    //         insertValue.className = 'book-information';
    //         insertValue.id = "book-"+[i];
    //         displayDiv.appendChild(insertValue);
    //         const parentDiv = document.getElementById('display-library');
    //         parentDiv.appendChild(displayDiv);
    //         document.getElementById("book-"+[i]).innerHTML ='title ' + newBook.title + ', Author ' + newBook.author + ', Pages ' + newBook.pages + ', Status ' + newBook.read; // add value of book-name (input) into the div 'display'
    //     }
    // // } 
    // // displayDiv.appendChild(insertValue);
    // console.log(myLibrary.length);

});



// //Display value in a table
// function createTable(){

//     // creates a <table> element, a <thead> and a <tbody> element
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");

//     if (myLibrary.length < 2){
//     const thead = document.createElement("thead");
//     //creates a header for the table
//     const headerRow = document.createElement("tr");

//     //Titles of each header in the table
//     const headers = ['Title', 'Author', 'Number of Pages', 'Status', 'Edit', 'Remove']

//     // Create 7 columns for the header
//     for (let i = 0; i < headers.length; i++) {
//         const headerCell = document.createElement("th"); // each cell of in the table column
//         const headerText = document.createTextNode(headers[i]);
//         headerCell.appendChild(headerText); // Add the text to the table header
//         headerRow.appendChild(headerCell); // Add each table header to the table row
//     }

//     //Adds header table row to the table head
//     thead.appendChild(headerRow)

//     const row = document.createElement("tr");
//     for(c=0; c<6; c++){
//         const titleCell = document.createElement("td");
//         // const authorCell = document.createElement("td");
//         const cellTitle = document.createTextNode(myLibrary[c]['author']);
//         // const cellAuthor = document.createTextNode(myLibrary[j]['author']);
//         // const cellPages = document.createTextNode(myLibrary[j]['pages']);
//         // const cellRead = document.createTextNode(myLibrary[j]['read']);
//         titleCell.appendChild(cellTitle);
//         // authorCell.appendChild(cellAuthor);
//         // cell.appendChild(cellPages);
//         // cell.appendChild(cellRead);
//         row.appendChild(titleCell);
//     }
//     tblBody.appendChild(row)
//     tbl.appendChild(thead); //Add the thead to the table
//     tbl.appendChild(tblBody); // Add the table body to the table
//     document.body.appendChild(tbl);
//     }
//     else{
//         const row = document.createElement("tr");
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode(inputBook.value);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//         tblBody.appendChild(row);
//         tbl.appendChild(tblBody); // Add the table body to the table
//         document.body.appendChild(tbl);
//     }
// console.log(myLibrary);
// }
//Add pop-up when adding a book
