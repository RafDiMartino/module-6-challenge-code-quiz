// Retriving highscores from local storage anad rendering them on the highscores page
const highscoresOl = document.getElementById("highscores");

let getScores = JSON.parse(localStorage.getItem("highscores"));
if (getScores != null) {
    for (let i = 0; i < getScores.length; i++) {
        const element = getScores[i];
        let li = document.createElement("li")
        li.textContent = `${element.initials} - scored ${element.score} points`
        highscoresOl.appendChild(li)
    } 
}

// Clear the highscores from the local storage
const clearHighscore = document.getElementById("clear")
clearHighscore.addEventListener("click", () => {
    highscoresOl.innerHTML = "";
    localStorage.clear("userScores");
    
});