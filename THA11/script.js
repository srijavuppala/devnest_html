const quiz = [{
        ques: "Q1: What animals do Joey and Chandler keep as pets?",
        a: "Monkey and duck",
        b: "CHICK AND Duck",
        c: "Dog and Cat",
        d: "Cat and Monkey",
        ans: "ans2"
    },
    {
        ques: "Q2: How many times does Ross get married?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"

    },
    {
        ques: "Q3: When do Monica and Chandler first meet?",
        a: "When Ross brings Chandler home for Thanksgiving",
        b: "When they move into adjacent apartments",
        c: "When Monica visits Ross at college",
        d: "When Chandler and Ross visit Monica at college",
        ans: "ans1"
    },
    {
        ques: "Q4:What is the name of the gang's favorite coffee shop?",
        a: "Coffee House",
        b: "Central Park",
        c: "The Roasted Bean",
        d: "Club Coffee",
        ans: "ans2"
    },
    {
        ques: "Q5:Who is Phoebe a surrogate for?",
        a: "her sister",
        b: "chandle and monics",
        c: "Ross and Rachel",
        d: "her brother",
        ans: "ans4"
    }
];


const question = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const h2 = document.querySelector('h2')
const li = document.querySelector('ul')
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')

let Score = 0;
let quesCount = 0;

const loadQuestion = () => {
    const questionList = quiz[quesCount];
    question.innerText = questionList.ques;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAns) => {
        if (curAns.checked) {
            answer = curAns.id;
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAns) => curAns.checked = false);
}

submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if (checkAnswer === quiz[quesCount].ans) {
        Score++;
    };
    quesCount++;

    deSelectAll();

    if (quesCount < quiz.length) {
        loadQuestion();
    } else {
        h2.style.display = "none";
        li.style.display = "none";
        submit.style.display = "none";
        showScore.innerHTML = `
        <h3>You scored ${Score}/${quiz.length} ✌</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});