const containerElement = document.querySelector(".container");

let currentQuestionNumber = 0;
let score = 0;

class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    //option - a,b,c,d
    checkAnswer(option) {
        if (option === this.answer) {
            return true;
        }
        return false;
    }

    printOnScreen() {
        containerElement.innerHTML = "";
        const questionTitle = document.createElement("h2");
        questionTitle.innerText = this.question;
        containerElement.appendChild(questionTitle);
        for (let key in this.options) {
            console.log(key);
            let option = document.createElement("div");
            let optionText = document.createElement("p");
            optionText.innerText = key + " " + this.options[key];
            option.appendChild(optionText);
            containerElement.appendChild(option);
            let button = document.createElement("button");
            button.innerText = "Select Answer";
            option.appendChild(button);
            button.addEventListener("click", () => {
                if (this.checkAnswer(key)) {
                    score++;
                }
                currentQuestionNumber++;
                printQuestion(questions[currentQuestionNumber]);
            });
        }
    }
}

const question1 = new Question(
    "What is my name?", {
        a: "Chattan Singh",
        b: "Chattan Paaji",
        c: "bhavya tomar",
        d: "bhavya singh",
    },
    "c"
);

const question2 = new Question(
    "The 'function' and  'var' are known as", {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
    },
    "c"
);

const question3 = new Question(
    "When interpreter encounters an empty statements, what it will do", {
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
    },
    "d"
);

function displayScore() {
    const scoreElement = document.createElement("h1");
    scoreElement.innerText = `Your score is ${score}`;
    containerElement.innerHTML = "";
    containerElement.appendChild(scoreElement);

    const retryButton = document.createElement("button");
    retryButton.innerText = "Retry";
    retryButton.addEventListener("click", function() {
        score = 0;
        currentQuestionNumber = 0;
        printQuestion(question1);
    });

    containerElement.appendChild(retryButton);
}

function printQuestion(question) {
    if (!question) {
        // undefined / null /  ''
        // return alert(`your score is ${score}`);
        return displayScore();
    }
    question.printOnScreen();
}

// question1.printOnScreen();
// question2.printOnScreen();

const questions = [question1, question2, question3];
//questions[56] // undefined
//                      0       1         2
printQuestion(question1);