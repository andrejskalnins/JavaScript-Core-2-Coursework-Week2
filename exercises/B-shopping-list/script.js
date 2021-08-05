function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let list = document.createElement("ul");
  content.appendChild(list);
  arrayOfPeople.forEach((shoppingItem) => {
    let listItem = document.createElement("li");
    listItem.textContent = shoppingItem;
    list.appendChild(listItem);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

// Old Attempt

// function shoppingList(arrayOfItems) {
//   // Write your code here...
//   let content = document.querySelector("#content");
//   let list = (content.innerHTML += `<ul></ul>`);
//   // arrayOfItems.forEach((item) => (content.innerHTML += `<li>${item}</li>`));
//   let listItems = arrayOfItems.forEach((item) => {
//     content.innerHTML += `<li>${item}</li>`;
//   });
//   list.append(listItems);
// }

// let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

// shoppingList(shopping);
