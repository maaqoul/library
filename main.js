let myLibrary = [];

function Book(title, author, numberOfPages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {
  console.log("i've been clicked");
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let numberOfPages = document.getElementById("numberOfPages").value;
  const book = new Book(title, author, numberOfPages);
  myLibrary.push(book);
  title = author = numberOfPages = " ";

  render();
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  addBookToLibrary();
});

function render() {
  const tbody = document.getElementById("render");

  for (const book of myLibrary) {
    const tr = document.createElement("tr");
    tbody.append(tr);
    addColumn(tr, book.title);
    console.log("book.title : ", book.title);
    addColumn(tr, book.author);
    console.log("book.author : ", book.author);
    addColumn(tr, book.numberOfPages);
    console.log("book.numberOfPages : ", book.numberOfPages);
  }
}

function addColumn(tr, element) {
  const td = document.createElement("td");
  td.innerHTML = element;
  tr.append(td);
}
