function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");

  let bookList = document.createElement("ul");
  content.appendChild(bookList);

  books.forEach((book) => {
    let listItem = document.createElement("li");

    let paragraph = document.createElement("p");
    paragraph.textContent = `${book.title} by ${book.author}`;
    listItem.appendChild(paragraph);
    bookList.appendChild(listItem);

    let coverImage = document.createElement("img");
    coverImage.src = book.cover;
    coverImage.style.width = "300px";

    listItem.appendChild(coverImage);
    bookList.classList.add("bookListStyle");
    listItem.classList.add("liSizeClass");
    if (book.alreadyRead === true) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover:
      "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
    alreadyRead: true,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    cover: "https://www.kurzweilai.net/images/themosthumanhuman.jpg",
    alreadyRead: false,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    cover:
      "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
    alreadyRead: false,
  },
];

readingList(books);
