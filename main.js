let myLibrary = [];

function Book(isbn, title, author, numberOfPages, isRead) {
  // the constructor...
  this.isbn = isbn;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
  let form = document.getElementById("myForm");
  const title = form.elements.namedItem("title").value.trim();
  const isbn = form.elements.namedItem("isbn").value.trim();
  const author = form.elements.namedItem("author").value.trim();
  const numberOfPages = form.elements.namedItem("numberOfPages").value.trim();
  const book = new Book(isbn, title, author, numberOfPages);
  myLibrary.push(book);
  render(myLibrary);
  form.reset();
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary();
});

function render(library) {
  console.log("library : ", library);
  const tbody = document.getElementById("render");

  for (const book of library) {
    const tr = document.createElement("tr");
    tr.id = book.isbn;
    const deleteButton = document.createElement("button");
    const toggleButton = document.createElement("button");
    tbody.append(tr);
    addColumn(tr, book.isbn);
    addColumn(tr, book.title);
    addColumn(tr, book.author);
    addColumn(tr, book.numberOfPages);
    addActionButton(tr, [
      {
        type: deleteButton,
        value: "delete",
        id: "delete-button",
        isbn: book.isbn,
        click: deleteItem
      },
      {
        type: toggleButton,
        value: "toggle read",
        id: "toggle-button",
        isbn: book.isbn,
        click: toggleRead
      }
    ]);
  }
}

function deleteItem(isbn) {
  console.log("delete isbn : ", isbn);
  const elem = document.getElementById(isbn);
  elem.parentNode.removeChild(elem);
}

function toggleRead() {
  console.log("toggle isbn : ", isbn);
}

function addColumn(tr, content) {
  const td = document.createElement("td");
  td.innerHTML = content;
  tr.append(td);
}

function addActionButton(tr, buttons) {
  console.log("buttons : ", buttons);
  const td = document.createElement("td");
  for (const button of buttons) {
    console.log("button from inside ", button.value);
    button.type.innerHTML = button.value;
    button.type.id = button.id;
    button.type.addEventListener("click", () => button.click(button.isbn));
    td.append(button.type);
    tr.append(td);
  }
}
