// Define the topic data
const topicData = [
    {
        topic: "General Questions",
        question: "What is JavaScript?",
        answer: "JavaScript is a scripting language."
    },
    {
        topic: "General Questions",
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    // Add more questions as needed
];

// DOM Elements
const dropdown = document.getElementById("dropdown");
const selectedOption = document.getElementById("selectedOption");
const startGameBtn = document.getElementById("startGameBtn");

let currentQuestionIndex = 0;

// Update selected option text
dropdown.addEventListener("change", function() {
    const selectedText = dropdown.options[dropdown.selectedIndex].text;
    selectedOption.textContent = "Selected: " + selectedText;
});

// Initialize the game
function startGame() {
    showCard();
}

startGameBtn.addEventListener("click", startGame);

function showCard() {
    const menuElement = document.getElementById("menu");
    menuElement.remove();

    const gameElement = document.getElementById("game");

    if (topicData.length > 0 && currentQuestionIndex < topicData.length) {
        const { topic, question, answer } = topicData[currentQuestionIndex];
        
        // Create a container div for the flashcard
        const flashCard = document.createElement('div');

        // Display topic and question
        const topicElement = document.createElement('h3');
        topicElement.textContent = `Topic: ${topic}`;
        
        const questionElement = document.createElement('h3');
        questionElement.textContent = `Question: ${question}`;
        
        flashCard.append(topicElement, questionElement);
        
        // Create and append the Reveal button
        const revealBtn = document.createElement("button");
        revealBtn.textContent = "Reveal";
        revealBtn.addEventListener("click", function() {
            backCard(flashCard, answer);
        });
        flashCard.append(revealBtn);

        // Create and append the Next button
        const nxtBtn = document.createElement("button");
        nxtBtn.textContent = "Next";
        nxtBtn.addEventListener("click", function() {
            currentQuestionIndex++;
            gameElement.innerHTML = ''; // Clear previous content
            if (currentQuestionIndex < topicData.length) {
                showCard(); // Show the next card
            } else {
                gameElement.innerHTML = '<h3>End of questions!</h3>'; // End of questions
            }
        });
        flashCard.append(nxtBtn);
        
        gameElement.append(flashCard);
    } else {
        console.error('No topic data available or end of questions');
    }
}

function backCard(flashCard, answer) {
    const topicElement = flashCard.querySelector('h3'); // Find the topic element
    const questionElement = topicElement.nextSibling; // Find the question element

    flashCard.removeChild(topicElement);
    flashCard.removeChild(questionElement);

    const answerElement = document.createElement('h3');
    answerElement.textContent = `Answer: ${answer}`;
    flashCard.append(answerElement);

    // Remove the Reveal button
    const revealBtn = flashCard.querySelector('button');
    flashCard.removeChild(revealBtn);
}
