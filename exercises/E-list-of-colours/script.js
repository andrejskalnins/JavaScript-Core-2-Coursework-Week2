function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let selectionList = document.createElement("select");
  let message = document.createElement("p");
  content.appendChild(selectionList);
  content.appendChild(message);

  colours.forEach((colour) => {
    let colourOption = document.createElement("option");
    selectionList.appendChild(colourOption);
    colourOption.innerText = colour;
    colourOption.value = colour;
    selectionList.addEventListener("change", function () {
      let getValue = selectionList.options[selectionList.selectedIndex].value;
      message.innerText = `You have selected: ${getValue}`;
      message.style.color = getValue;
    });
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
