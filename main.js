let myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
  let form = document.getElementById("myForm");
  const title = form.elements.namedItem("title").value.trim();
  const author = form.elements.namedItem("author").value.trim();
  const numberOfPages = form.elements.namedItem("numberOfPages").value.trim();
  const book = new Book(title, author, numberOfPages);
  myLibrary.push(book);
  render();
  form.reset();
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary();
});

function render() {
  const tbody = document.getElementById("render");

  for (const book of myLibrary) {
    const tr = document.createElement("tr");
    tbody.append(tr);
    addColumn(tr, book.title);
    addColumn(tr, book.author);
    addColumn(tr, book.numberOfPages);
  }
}

function addColumn(tr, element) {
  const td = document.createElement("td");
  td.innerHTML = element;
  tr.append(td);
}
