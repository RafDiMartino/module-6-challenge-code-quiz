// function that record the highscores
const highscoresOl = document.getElementById("highscores");

let test = JSON.parse(localStorage.getItem("highscores"));
console.log(test)
for (let i = 0; i < test.length; i++) {
    const element = test[i];
    console.log(element)
    let li = document.createElement("li")
    li.textContent = `${element.initials} - scored ${element.score} points`
    highscoresOl.appendChild(li)
}


// Clear the highscores from the local storage
const clearHighscore = document.getElementById("clear")
clearHighscore.addEventListener("click", () => {
    highscoresOl.innerHTML = "";
    localStorage.clear("userScores");
    
});