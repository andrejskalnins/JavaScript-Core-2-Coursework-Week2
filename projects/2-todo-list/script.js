function populateTodoList(todos) {
  let list = document.querySelector("#todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.replaceChildren([]);
  todos.map(createTodoItem).forEach((li) => list.appendChild(li));
}

function createTodoItem(todo, index) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill ";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";
  completedButton.addEventListener("click", () => {
    let currentTodo = todos[index];
    toggleTodoCompleted(currentTodo);
    // populateTodoList(todos);
    addToLocalStorage(todos);
  });

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";
  deleteButton.addEventListener("click", () => {
    deleteTodo(index);
    // populateTodoList(todos);
    addToLocalStorage(todos);
  });

  span.appendChild(completedButton);
  span.appendChild(deleteButton);

  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerText = todo.task;
  li.appendChild(span);
  if (todo.completed) {
    li.style = "text-decoration: line-through;";
  }

  return li;
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes, yoshiharu", completed: false },
  { task: "Do the shopping, tsuge", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  let todoInput = document.querySelector("#todoInput");
  let newTodo = { task: todoInput.value, completed: false };
  if (todoInput.value === "") return;
  todos.push(newTodo);

  // populateTodoList(todos);
  addToLocalStorage(todos);

  // clears the input bar
  todoInput.value = "";
}

function toggleTodoCompleted(todo) {
  todo.completed = !todo.completed;
}

function deleteTodo(index) {
  todos.splice(index, 1);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  todos = todos.filter((todo) => !todo.completed);
  // populateTodoList(todos);
  addToLocalStorage(todos);
}

// Local storage experiment.
// All of it is copy pasted from the internet. I don't know how localstorage works, I just wanted to see if I could make it function just from pulling information out of tutorials.

function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem("todos", JSON.stringify(todos));
  // render them to screen
  populateTodoList(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    populateTodoList(todos);
  }
}

// initially get everything from localStorage
getFromLocalStorage();
