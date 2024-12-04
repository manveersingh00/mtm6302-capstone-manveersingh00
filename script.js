const save_correct = document.getElementById("savecorrect");
const save_incorrect = document.getElementById("saveincorrect");
const messageBox = document.getElementById("message");
save_correct.innerText = localStorage.getItem("correct") ? localStorage.getItem("correct") : 0;
save_incorrect.innerText = localStorage.getItem("incorrect") ? localStorage.getItem("incorrect") : 0;

let diff = "easy";
let cat = "Linux";
function getSelectedValue() {
    let selectElement = document.getElementById("difficulty");
    let catElement = document.getElementById("category");
    diff = selectElement.value;
    cat = catElement.value;
}

function resetScore() {
    localStorage.setItem("correct", 0);
    localStorage.setItem("incorrect", 0);
    save_incorrect.innerText = 0;
    save_correct.innerText = 0;
}

const startbtn = document.querySelector(".startbtn");
const quizcontainer = document.querySelector(".single-quiz");
const formcontainer = document.querySelector(".initial-form");

const callAPI = () => {
    const api_url = `https://quizapi.io/api/v1/questions?apiKey=Ki3fX8OZk4uB81gflPqhJAA9kyp0bdOuRnsyyTNm&limit=10&difficulty=${diff}&tags=${cat}`;
    formcontainer.classList.add("hide");
    getdata(api_url);
};

startbtn.addEventListener("click", callAPI);

let index = 0;
let data;
let total = 0;
let same_question;
let option1_d;
let option2_d;
let option3_d;
let option4_d;
let time;
let interval;

async function getdata(url) {
    const response = await fetch(url);
    data = await response.json();
    quizcontainer.classList.remove("hide");
    nextquestion();
}

const setTimer = () => {
    interval = setInterval(() => {
        time -= 1;
        if (time == 0) {
            nextquestion();
        }
    }, 1000);
};

const nextquestion = () => {
    messageBox.innerText = "";
    time = 59;
    if (index < 10) {
        clearInterval(interval);
        setTimer();
    }

    if (index >= 10) {
        const inc = (index - 1) - total;
        if ((inc + total) == 10) {
            localStorage.setItem("correct", total);
            localStorage.setItem("incorrect", inc);
        } else {
            localStorage.setItem("correct", total);
            localStorage.setItem("incorrect", 10 - total);
        }
        quizcontainer.classList.add("hide");
        formcontainer.classList.remove("hide");
        location.reload();
        return;
    }

    index++;
    same_question = false;

    let timer = document.getElementById("timer");
    setInterval(() => {
        timer.innerText = time;
    }, 1000);

    if (data) {
        const question_d = document.getElementById("question");
        option1_d = document.getElementById("option1");
        option2_d = document.getElementById("option2");
        option3_d = document.getElementById("option3");
        option4_d = document.getElementById("option4");

        const allOptions = [option1_d, option2_d, option3_d, option4_d];
        allOptions.forEach((option) => {
            if (option) {
                option.disabled = false;
            }
        });

        const qnumber = document.getElementById("qnumber");
        const correct_a = document.getElementById("correctanswer");
        const incorrect_a = document.getElementById("incorrectanswer");

        qnumber.innerText = index;
        question_d.innerText = data[index - 1].question;
        correct_a.innerText = total;
        incorrect_a.innerText = (index - 1) - total;


        if (data[index - 1].answers.answer_a !== null) {
            option1_d.classList.remove("hide")
            option1_d.innerText = data[index - 1].answers.answer_a;
            option1_d.classList.add("option-1");
            option1_d.onclick = () => {
                calculate("1", option1_d);
            };
        } else {
            option1_d.classList.add("hide")
        }

        if (data[index - 1].answers.answer_b !== null) {
            option2_d.classList.remove("hide")
            option2_d.innerText = data[index - 1].answers.answer_b;
            option2_d.classList.add("option-2");
            option2_d.onclick = () => {
                calculate("2", option2_d);
            };
        } else {
            option2_d.classList.add("hide")
        }

        if (data[index - 1].answers.answer_c !== null) {
            option3_d.classList.remove("hide")
            option3_d.innerText = data[index - 1].answers.answer_c;
            option3_d.classList.add("option-3");
            option3_d.onclick = () => {
                calculate("3", option3_d);
            };
        } else {
            option3_d.classList.add("hide")
        }

        if (data[index - 1].answers.answer_d !== null) {
            option4_d.classList.remove("hide")
            option4_d.innerText = data[index - 1].answers.answer_d;
            option4_d.classList.add("option-4");
            option4_d.onclick = () => {
                calculate("4", option4_d);
            };
        } else {
            option4_d.classList.add("hide")
        }

        const nextq_btn = document.getElementById("s-answer");
        nextq_btn.classList.add("nextq-btn");
        if (index <= 9) {
            nextq_btn.innerText = "Next Question";
        } else {
            nextq_btn.innerText = "Submit";
        }
        nextq_btn.onclick = nextquestion;
    }
};

const calculate = (user_choice, button) => {
    if (option1_d && option1_d.classList.contains("choosen")) {
        option1_d.classList.remove("choosen");
    } else if (option2_d && option2_d.classList.contains("choosen")) {
        option2_d.classList.remove("choosen");
    } else if (option3_d && option3_d.classList.contains("choosen")) {
        option3_d.classList.remove("choosen");
    } else if (option4_d && option4_d.classList.contains("choosen")) {
        option4_d.classList.remove("choosen");
    }

    button.classList.add("choosen");

    const answeris = Object.values(data[index - 1].correct_answers)[
        user_choice - 1
    ];

    if (answeris === "true" && !same_question) {
        total++;
        messageBox.innerText = "Correct Answer!";
        messageBox.classList.add("text-success");
        messageBox.classList.remove("text-danger");
        same_question = true;
    } else {
        messageBox.innerText = "Incorrect Answer!";
        messageBox.classList.add("text-danger");
        messageBox.classList.remove("text-success");

    }

    const allOptions = [option1_d, option2_d, option3_d, option4_d];
    allOptions.forEach((option) => {
        if (option) {
            option.disabled = true;
        }
    });
};