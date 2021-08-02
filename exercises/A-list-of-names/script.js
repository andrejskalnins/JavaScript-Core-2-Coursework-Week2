function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(
  people.forEach(
    (person) =>
      (content.innerHTML += `<h1>${person.name}</h1> <h2>${person.job}</h2>`)
  )
);
