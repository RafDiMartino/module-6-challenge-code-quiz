// Questions for the game, the object contains the questions, answers and correct answer
// Questions and answers taken from https://www.interviewbit.com/javascript-mcq/
const questions = [
    {
        question: "Javascript is an _______ language?",
        choices: [
            "1. Object-Oriented",
            "2. Object-Based",
            "3. Procedural",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: [
            "1. var",
            "2. let",
            "3. Both A and B",
            "4. None of the above"
        ],
        correct: 3
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: [
            "1. getElementbyId()",
            "2. GetElementsByClassName()",
            "3. Both A and B",
            "4. None of the above"
        ],
        correct: 3
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: [
            "1. Throws an error",
            "2. Ignores the statements",
            "3. Gives a warning",
            "4. None of the above"
        ],
        correct: 2
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
            "1. document.write()",
            "2. console.log()",
            "3. window.alert()",
            "4. All of the above"
        ],
        correct: 4
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: [
            "1. Const",
            "2. var",
            "3. let",
            "4. constant"
        ],
        correct: 1
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        choices: [
            "1. in",
            "2. is in",
            "3. exists",
            "4. lies"
        ],
        correct: 1
    },
    {
        question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
        choices: [
            "1. Object Serialisation",
            "2. Object Encapsulation",
            "3. Object Inheritance",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: [
            "1. stringify()",
            "2. parse()",
            "3. convert()",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Which of the following are closures in Javascript?",
        choices: [
            "1. Variables",
            "2. Functions",
            "3. Objects",
            "4. All of the above"
        ],
        correct: 4
    },
]
let totalScore = 0

// Function that displays a random question
function displayQuestion(){
    let randomQuestion = Math.floor(Math.random() * questions.length)
    // console.log(randomQuestion)
    for (let i = 0; i < questions.length; i++) {
        const element = questions[randomQuestion];
        questionTitle.textContent = element.question
        choices.textContent = ""
        startScreen.classList.add("hide")
        questionsDiv.classList.remove("hide")
        element.choices.forEach((el) => {
            let choicesBtn = document.createElement("button")
            choices.appendChild(choicesBtn)
            choicesBtn.addEventListener("click", ()=>{
                setTimeout(() => {
                    displayQuestion()
                }, 1000)
                if (choicesBtn.innerText.includes(`${element.correct}`) === true) {
                    rightAnswer()
                }else {
                    wrongAnswer()
                }
            })
            choicesBtn.textContent = `${el}` 
        })
    }
    if (countdown <= 0) {
        questionsDiv.classList.add("hide")
    }
}

