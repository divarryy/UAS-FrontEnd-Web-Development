// JavaScript code for multiple text animation with cursor
const texts = ["Web Developer", "Designer", "Problem Solver", "Creative Thinker"]; // Array of texts
let count = 0;
let index = 0; 
let currentText = ""; 
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".multiple-text").textContent = letter + "|"; // Display text with cursor animation

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300); // Typing speed
})();

