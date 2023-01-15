//Variables
const questionsDiv = document.getElementById("questions")
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start");
const endScreen = document.getElementById("end-screen");
const feedback = document.getElementById("feedback")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initials")
const submitInitials = document.getElementById("submit")
const highscoresOl = document.getElementById("highscores");
const rightAnsAudio = new Audio("assets/sfx/correct.wav")
const wrongAnsAudio = new Audio("assets/sfx/incorrect.wav")

let timer = document.getElementById("time");
let countdown = 60;

// Function that starts the game
function startGame(){
    startBtn.addEventListener("click", () => {
        console.log("clicked")
        timer.textContent = countdown
        countdownTimer()
        displayQuestion()
    })

}
startGame()

// function to start the timer
function countdownTimer(){
    let timeInterval = setInterval( () => {
        countdown--;
        timer.textContent = countdown
        if (countdown <= 0) {
            clearInterval(timeInterval)
            console.log("ended")
            questionsDiv.classList.add("hide")
            endScreen.classList.remove("hide")
            finalScore.textContent = `${totalScore}`
            timer.textContent = 0;
        }
    }, 1000)
    scores()
}

// function to update the timer on wrong or right answer
function updateTimer(){
    countdown -= 10
}

// function that record the highscores to local storage
let highscoreInitials = []

function scores(){
    submitInitials.addEventListener("click", (e) =>{
        storeScores()
        e.preventDefault();
    })
}

function storeScores() {
    highscoreInitials.push(`${initials.value.toUpperCase()} - ${totalScore}`)
    localStorage.setItem('highscores', JSON.stringify(highscoreInitials));
    // if (storedHighScore !== null) {
    //     highscoreInitials = storedHighScore;
    // }

    console.log(`${highscoreInitials} ${totalScore}`)
    window.location.replace('highscores.html');
}
