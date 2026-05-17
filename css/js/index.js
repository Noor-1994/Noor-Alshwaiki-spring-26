const skills = ["HTML", "CSS", "JavaScript", "GitHub"];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

const footer = document.createElement("footer");

footer.innerText = "Noor Alshwaiki © 2026";

document.body.appendChild(footer);