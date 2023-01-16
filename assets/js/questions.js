// Questions for the game, the object contains the questions, answers and correct answer
// Questions and answers taken from https://www.interviewbit.com/javascript-mcq/ and https://www.sanfoundry.com/1000-javascript-questions-answers/
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
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        choices: [
            "1. Boolean",
            "2. Undefined",
            "3. Object",
            "4. Integer"
        ],
        correct: 3
    },
    {
        question: "What is the output of the following code snippet? 'print(NaN === NaN);'",
        choices: [
            "1. True",
            "2. False",
            "3. Undefined",
            "4. Error"
        ],
        correct: 2
    },
    {
        question: "What will be the output of the following code snippet? 'print(typeof(NaN));'",
        choices: [
            "1. Object",
            "2. Number",
            "3. String",
            "4. None of the above"
        ],
        correct: 2
    },
    {
        question: "What will be the outputWhich of the following is not a Javascript framework?",
        choices: [
            "1. Node",
            "2. Vue",
            "3. React",
            "4. Cassandra"
        ],
        correct: 4
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        choices: [
            "1. Async",
            "2. Await",
            "3. setTimeout",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "How to stop an interval timer in Javascript?",
        choices: [
            "1. clearInterval",
            "2. clearTimer",
            "3. intervalOver",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "How do we write a comment in javascript?",
        choices: [
            "1. /* */",
            "2. //",
            "3. #",
            "4. $ $"
        ],
        correct: 2
    },
    {
        question: "Which object in Javascript doesn’t have a prototype?",
        choices: [
            "1. Base Object",
            "2. All objects have a prototype",
            "3. None of the objects have a prototype",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        choices: [
            "1. Date",
            "2. FileUpload",
            "3. Function",
            "4. All of the above"
        ],
        correct: 4
    },
    {
        question: "What does … operator do in JS?",
        choices: [
            "1. It is used to spread iterables to individual elements",
            "2. It is used todescribe a datatype of undefined size",
            "3. No such operator exists",
            "4. None of the above"
        ],
        correct: 1
    },

    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        choices: [
            "1. It is an ordered list of values",
            "2. It is an ordered list of objects",
            "3. It is an ordered list of string",
            "4. It is an ordered list of functions"
        ],
        correct: 1
    },
    {
        question: "Which of the following is not javascript data types?",
        choices: [
            "1. Null type",
            "2. Undefined type",
            "3. Number type",
            "4. All of the mentioned"
        ],
        correct: 4
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        choices: [
            "1. Position",
            "2. Window",
            "3. Standard",
            "4. Location"
        ],
        correct: 2
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        choices: [
            "1. Function/Method",
            "2. Preprocessor",
            "3. Triggering Event",
            "4. RMI"
        ],
        correct: 1
    },
    {
        question: "Which of the following scoping type does JavaScript use?",
        choices: [
            "1. Sequential",
            "2. Segmental",
            "3. Lexical",
            "4. Literal"
        ],
        correct: 3
    },
    {
        question: "Why JavaScript Engine is needed?",
        choices: [
            "1. Both Compiling & Interpreting the JavaScript",
            "2. Parsing the javascript",
            "3. Interpreting the JavaScript",
            "4. Compiling the JavaScript"
        ],
        correct: 3
    },
    {
        question: "Which of the following is not a framework?",
        choices: [
            "1. JavaScript .NET",
            "2. JavaScript",
            "3. Cocoa JS",
            "4. jQuery"
        ],
        correct: 2
    },
    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        choices: [
            "1. onclick",
            "2. onerror",
            "3. onmessage",
            "4. onexception"
        ],
        correct: 2
    },
    {
        question: "Which of the following is not an error in JavaScript?",
        choices: [
            "1. Missing of Bracket",
            "2. Division by zero",
            "3. Syntax error",
            "4. Missing of semicolons"
        ],
        correct: 2
    },
    {
        question: "What does the location property represent?",
        choices: [
            "1. Current DOM object",
            "2. Current URL",
            "3. Both DOM object and URL",
            "4. Document"
        ],
        correct: 2
    },
    {
        question: "Which among the following is not a property of the Location object?",
        choices: [
            "1. protocol",
            "2. host",
            "3. hostee",
            "4. hostname"
        ],
        correct: 3
    },
]

// Variable that keep tracks of the total scores
let totalScore = 0

// Function that displays a random question
function displayQuestion(){
    let randomQuestion = Math.floor(Math.random() * questions.length)
    for (let i = 0; i < questions.length; i++) {
        const element = questions[randomQuestion];
        questionTitle.textContent = element.question
        choices.textContent = ""
        startScreen.classList.add("hide")
        questionsDiv.classList.remove("hide")
        element.choices.forEach((el) => {
            let choicesBtn = document.createElement("button")
            choices.appendChild(choicesBtn)
            choicesBtn.addEventListener("click", () => {
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

// Function that fires if the question is answered correctly
function rightAnswer(){
    rightAnsAudio.play()
    feedback.classList.remove("hide")
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000)
    feedback.textContent = "Right answer!!!"
    totalScore++
}

// Function that fires if the question is answered incorrectly
function wrongAnswer(){
    wrongAnsAudio.play()
    feedback.classList.remove("hide")
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000)
    feedback.textContent = "Wrong answer!!!"
    updateTimer()
}