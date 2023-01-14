//Variables
const startBtn = document.getElementById("start");
let timer = document.getElementById("time");
let countdown = 60;
var questionIndex = 0;

// Function that starts the game
function startGame(){
    startBtn.addEventListener("click", () => {
        console.log("clicked")
        timer.textContent = countdown
        countdownTimer()
    })
    
}
startGame()

// function to start the timer
function countdownTimer(){
    let timeInterval = setInterval( () => {
        countdown--;
        timer.textContent = countdown
        if (countdown === 0) {
            clearInterval(timeInterval)
            console.log("ended")
            return
        }
    }, 1000)
}

// function to update the timer on wrong or right answer
function updateTimer(){

}