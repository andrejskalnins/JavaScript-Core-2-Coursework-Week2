function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let toDoList = document.createElement("ul");

  content.appendChild(toDoList);

  todos.forEach((listItem) => {
    let toDoItems = document.createElement("li");
    toDoItems.textContent = listItem.todo;
    toDoList.appendChild(toDoItems);
    toDoItems.addEventListener("click", function () {
      if (toDoItems.style.textDecoration === "") {
        toDoItems.style.textDecoration = "line-through";
      } else if (toDoItems.style.textDecoration === "line-through") {
        toDoItems.style.textDecoration = null;
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
