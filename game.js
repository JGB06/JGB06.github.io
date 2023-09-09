
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Berlín", "Roma"],
        correctAnswer: 1
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        options: ["1939", "1945", "1914", "1941"],
        correctAnswer: 0
    },
    // Agrega más preguntas aquí
];

let currentPlayer = 1;
let currentQuestionIndex = 0;
let player1Score = 0;
let player2Score = 0;
let diceValue = 1;
let isAnswered = false;

const diceContainer = document.getElementById("dice-container");
const diceValueElement = document.getElementById("dice-value");
const rollDiceButton = document.getElementById("roll-dice-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const player1ScoreElement = document.getElementById("player1-score");
const player2ScoreElement = document.getElementById("player2-score");
const nextButton = document.getElementById("next-btn");
const answerForm = document.getElementById("answer-form");
const answerMessageInput = document.getElementById("answer-message");
const questionValueInput = document.getElementById("question-value");

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceValueElement.textContent = diceValue;
    diceContainer.style.display = "none";
    questionContainer.style.display = "block";
    answerMessageInput.value = "¡Lanzaste el dado y obtuviste:";
    questionValueInput.value = diceValue;
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    isAnswered = false;

    question.options.forEach((option, idx) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "btn btn-secondary";
        button.addEventListener("click", () => checkAnswer(idx));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (isAnswered) {
        return;
    }

    isAnswered = true;
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correctAnswer;

    if (selectedIndex === correctIndex) {
        if (currentPlayer === 1) {
            player1Score += diceValue;
            player1ScoreElement.textContent = player1Score;
        } else {
            player2Score += diceValue;
            player2ScoreElement.textContent = player2Score;
        }
        answerMessageInput.value = "¡Respuesta Correcta! Ganaste:";
        questionValueInput.value = diceValue;
    } else {
        answerMessageInput.value = "¡Respuesta Incorrecta!";
        questionValueInput.value = "0";
    }

    showAnswerFeedback(selectedIndex, correctIndex);
}

function showAnswerFeedback(selectedIndex, correctIndex) {
    const options = optionsElement.children;

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("btn-secondary");
        if (i === correctIndex) {
            options[i].classList.add("btn-success");
        } else if (i === selectedIndex) {
            options[i].classList.add("btn-danger");
        }
    }

    setTimeout(() => {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("btn-danger", "btn-success");
            options[i].classList.add("btn-secondary");
        }
        nextQuestion();
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    currentPlayer = 3 - currentPlayer; // Cambiar turno (1 a 2, 2 a 1)
    diceContainer.style.display = "block";
    questionContainer.style.display = "none";
    checkWinner(); // Verificar si alguien ha ganado
}

function checkWinner() {
    if (player1Score >= 20) {
        alert("¡Jugador 1 ha ganado con " + player1Score + " puntos!");
        resetGame();
    } else if (player2Score >= 20) {
        alert("¡Jugador 2 ha ganado con " + player2Score + " puntos!");
        resetGame();
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    nextButton.style.display = "none";
    diceContainer.style.display = "block";
    questionContainer.style.display = "none";
}

rollDiceButton.addEventListener("click", rollDice);
nextButton.addEventListener("click", nextQuestion);
// Mostrar la primera pregunta al cargar la página
showQuestion(currentQuestionIndex);

