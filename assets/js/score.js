// function that record the highscores
const highscoresOl = document.getElementById("highscores");

var storedTodos = JSON.parse(localStorage.getItem("highscores"));
let li = document.createElement("li")
li.textContent = `${storedTodos}`
highscoresOl.appendChild(li)

const clearHighscore = document.getElementById("clear")
clearHighscore.addEventListener("click", () => {
    highscoresOl.innerHTML = "";
    localStorage.removeItem("highscores");
    
});