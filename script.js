document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    setupEnterKeyListener(); // Set up the "Enter" key listener
});

const questions = [
    {
        word: "ambiguous",
        definition: "Open to more than one interpretation; not having one obvious meaning.",
        context: "The ending of the story was deliberately __________.",
        type: "text",
        correctAnswer: "ambiguous"
    },
    {
        word: "benevolent",
        definition: "Well meaning and kindly.",
        context: "The __________ king donated his wealth to the poor.",
        type: "multiple",
        options: ["malevolent", "benevolent", "malicious", "hostile"],
        correctAnswer: "benevolent"
    },
    {
        word: "cogent",
        definition: "Clear, logical, and convincing.",
        context: "He produced a __________ argument for the project.",
        type: "multiple",
        options: ["vague", "cogent", "ambiguous", "unclear"],
        correctAnswer: "cogent"
    },
    {
        word: "deliberate",
        definition: "Done consciously and intentionally.",
        context: "The __________ act caused widespread damage.",
        type: "text",
        correctAnswer: "deliberate"
    },
    {
        word: "eclectic",
        definition: "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        context: "The museum's collection was __________, with pieces from all over the world.",
        type: "multiple",
        options: ["eclectic", "narrow", "limited", "specific"],
        correctAnswer: "eclectic"
    },
    {
        word: "facetious",
        definition: "Treating serious issues with deliberately inappropriate humor.",
        context: "His __________ remarks during the meeting were not appreciated.",
        type: "text",
        correctAnswer: "facetious"
    },
    {
        word: "gregarious",
        definition: "Fond of company; sociable.",
        context: "She was a __________ and outgoing person.",
        type: "multiple",
        options: ["shy", "reserved", "gregarious", "introverted"],
        correctAnswer: "gregarious"
    },
    {
        word: "haphazard",
        definition: "Lacking any obvious principle of organization.",
        context: "The documents were arranged in a __________ manner.",
        type: "text",
        correctAnswer: "haphazard"
    },
    {
        word: "incongruous",
        definition: "Not in harmony or keeping with the surroundings or other aspects of something.",
        context: "The modern sculpture looked __________ in the ancient building.",
        type: "multiple",
        options: ["incongruous", "appropriate", "fitting", "harmonious"],
        correctAnswer: "incongruous"
    },
    {
        word: "juxtapose",
        definition: "Place or deal with close together for contrasting effect.",
        context: "The artist liked to __________ bright colors with dark ones.",
        type: "text",
        correctAnswer: "juxtapose"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
const totalQuestions = 10;

function loadQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        displayFinalScore();
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById("context").textContent = question.context;
    document.getElementById("feedback").textContent = '';
    document.getElementById("percentage").style.display = 'none'; // Hide percentage initially

    // Reset the reveal definition button text
    const revealButton = document.getElementById("reveal-definition");
    revealButton.textContent = "Click here to reveal the definition";

    if (question.type === "multiple") {
        displayMultipleChoice(question);
        document.getElementById("submit-button").textContent = "Click on the correct option!";
    } else {
        displayTextInput(question);
        document.getElementById("submit-button").textContent = "Submit or Press Enter";
    }

    updateScore();
}

function displayMultipleChoice(question) {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear previous options
    document.getElementById("answer").style.display = "none"; // Hide text input

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function displayTextInput(question) {
    document.getElementById("options").innerHTML = ""; // Clear options
    document.getElementById("answer").style.display = "block"; // Show text input
    document.getElementById("answer").value = ""; // Clear input field
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    let userAnswer;

    if (question.type === "multiple") {
        userAnswer = selectedOption;
    } else {
        userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    }

    attempts++; // Increment attempts for each question attempt

    if (userAnswer === question.correctAnswer.toLowerCase()) {
        document.getElementById("feedback").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("feedback").textContent = `Incorrect. The correct answer was: ${question.correctAnswer}.`;
    }

    currentQuestionIndex++;
    document.getElementById("percentage").style.display = 'block'; // Show percentage after answering

    setTimeout(loadQuestion, 2000);

    updateScore();
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}/${attempts}`;
    document.getElementById("percentage").textContent = `Percentage: ${((score / attempts) * 100).toFixed(2)}%`;
}

function displayFinalScore() {
    document.getElementById("context").textContent = "Quiz Complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("answer").style.display = "none";
    document.getElementById("feedback").textContent = `Your final score is ${score} out of ${totalQuestions} questions attempted.`;
    document.getElementById("percentage").style.display = 'block'; // Ensure percentage is shown
}

function toggleDefinition() {
    const question = questions[currentQuestionIndex];
    const revealButton = document.getElementById("reveal-definition");
    // Toggle between showing definition and original text
    revealButton.textContent = revealButton.textContent === question.definition ? "Click here to reveal the definition" : question.definition;
}

function setupEnterKeyListener() {
    const answerInput = document.getElementById("answer");
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkAnswer(); // Call the checkAnswer function when Enter is pressed
        }
    });
}
