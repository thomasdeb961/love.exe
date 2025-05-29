// script.js
const output = document.getElementById("output");
const startButton = document.getElementById("startButton");

const lines = [
  "> Initialisation du programme Love.exe...",
  "> Chargement des modules sentimentaux [OK]",
  "> Bienvenue Agent Gonzague.",
  "> Préparation de la mission \"Restauration Sentimentale\" en cours...",
  "",
  "> Tape sur ▶ Lancer la mission pour commencer."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      output.innerHTML += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeLine, 35);
    } else {
      output.innerHTML += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 250);
    }
  } else {
    startButton.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", typeLine);

startButton.addEventListener("click", () => {
  window.location.href = "fragment1.html";
});
