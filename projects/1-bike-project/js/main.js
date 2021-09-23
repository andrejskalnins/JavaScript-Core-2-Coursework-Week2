// Part 1

// Blue Button
let blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");

  jumbotron.setAttribute("class", "jumbotron jumbotron-toggle-blue");
});
blueBtn.addEventListener("click", () => {
  let donateBikeBtn = document.querySelector(".buttons a:first-child");
  donateBikeBtn.setAttribute(
    "class",
    " btn btn-primary btn-lrg donateBtn-toggle-blue"
  );
});
blueBtn.addEventListener("click", () => {
  let volunteerBtn = document.querySelector(".buttons a:nth-child(2)");
  volunteerBtn.setAttribute(
    "class",
    "btn btn-secondary btn-lrg volunteerBtn-toggle-blue"
  );
});

// Orange Button
orangeBtn.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.setAttribute("class", "jumbotron jumbotron-toggle-orange");
});
orangeBtn.addEventListener("click", () => {
  let donateBikeBtn = document.querySelector(".buttons a:first-child");
  donateBikeBtn.setAttribute(
    "class",
    "btn btn-secondary btn-lrg donateBtn-toggle-orange"
  );
});
orangeBtn.addEventListener("click", () => {
  let volunteerBtn = document.querySelector(".buttons a:nth-child(2)");

  volunteerBtn.setAttribute(
    "class",
    "btn btn-secondary btn-lrg volunteerBtn-toggle-orange"
  );
});

// Green Button

greenBtn.addEventListener("click", () => {
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.setAttribute("class", "jumbotron jumbotron-toggle-green");
});
greenBtn.addEventListener("click", () => {
  let donateBikeBtn = document.querySelector(".buttons a:first-child");
  donateBikeBtn.setAttribute(
    "class",
    "btn btn-secondary btn-lrg donateBtn-toggle-green"
  );
});
greenBtn.addEventListener("click", () => {
  let volunteerBtn = document.querySelector(".buttons a:nth-child(2)");

  volunteerBtn.setAttribute(
    "class",
    "btn btn-secondary btn-lrg volunteerBtn-toggle-green"
  );
});

// Part 2

// Select elements
let emailInput = document.querySelector("#exampleInputEmail1");
let nameInput = document.querySelector("#example-text-input");
let textAreaInput = document.querySelector("#exampleTextarea");
let submitBtn = document.querySelector("form > button");
let form = document.querySelector("form");

// Event listener for when the form is submited
form.addEventListener("submit", (event) => {
  // preventDefault() to not refresh the page after submitting the form
  event.preventDefault();
  // forEach used to iterate through each form element and filter through conditions
  [...form.elements].forEach((input) => {
    if (input.value.length <= 0 || emailInput.value.includes(!"@")) {
      input.style.backgroundColor = "#ff000033";
      submitBtn.style.backgroundColor = "";
    } else {
      input.style.backgroundColor = "white";
    }
  });
  // Check if the inputs are not empty. Alert user and clear the form.
  if (
    emailInput.value.length > 0 &&
    nameInput.value.length > 0 &&
    textAreaInput.value.length > 0
  ) {
    alert("Thank you for filling out the form");
    emailInput.value = "";
    nameInput.value = "";
    textAreaInput.value = "";
  }
});
