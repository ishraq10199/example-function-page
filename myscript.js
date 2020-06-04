// let, const, (var)
let numberOfBooks = document.getElementById("number");

// Step 1: identify the button
let buyButton = document.getElementById("myButton");

// Step 2: add an event listener
buyButton.addEventListener("click", buy);

// Step 1: identify the button
let sellButton = document.getElementById("mySecondButton");

// Step 2: add an event listener
sellButton.addEventListener("click", sell);

let bookCount = 0;

//initially runs once
numberOfBooks.innerHTML = bookCount;

//Whenever button is clicked
function buy() {
  bookCount = bookCount + 1;
  numberOfBooks.innerText = bookCount;
}

function sell() {
  bookCount = bookCount - 1;
  numberOfBooks.innerText = bookCount;
}
