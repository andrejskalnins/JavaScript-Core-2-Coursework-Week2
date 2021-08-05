function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(
    (person) =>
      (content.innerHTML += `<h1>${person.name}</h1> <h2>${person.job}</h2>`)
  );
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

// An h2 tag that says "Version 2 Below"
let subheading = document.createElement("h2");
subheading.textContent = "Version 2 Below";
// add in-line style
subheading.style.color = "orchid";
content.append(subheading);

// version 2.

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let nameH1 = document.createElement("h1");
    let jobH2 = document.createElement("h2");
    content.appendChild(nameH1);
    nameH1.textContent = person.name;
    content.appendChild(jobH2);
    jobH2.textContent = person.job;
  });
}

listOfNames(people);
