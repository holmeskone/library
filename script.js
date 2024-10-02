const inputBook = document.getElementById("add-book");
const submitBook = document.getElementById("submit-button");


const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
    addBook = inputBook.value;
    myLibrary.push(addBook);
    console.log(myLibrary);
    return false;
};

//   if(submitBook === true){
//     myLibrary.push(book);
//   }
//   console.log(myLibrary)
// }
