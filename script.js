const inputBook = document.getElementById("book-name");
const submitBook = document.getElementById("submit-button");


const myLibrary = ["HarryPotter", "LoR", "Jumanji"];

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
    document.getElementById("display").innerText = document.getElementById("book-name").value; // add value of book-name (input) into the div 'display'
});

//Display value in a table

function createTable(){
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const thead = document.createElement("th");

    for (i=0; i<myLibrary.length; i++){
        const row = document.createElement("tr");
        for(j=0; j<7; j++){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        row.appendChild(thead);
        tblBody.appendChild(row)    
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);

}