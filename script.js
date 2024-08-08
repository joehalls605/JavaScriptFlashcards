// Define the topic data
const topicData = [
    {
        topic: "General Questions",
        question: "What is JavaScript?",
        answer: "JavaScript is a scripting language."
    }
];

// DOM Elements
const dropdown = document.getElementById("dropdown");
const selectedOption = document.getElementById("selectedOption");

dropdown.addEventListener("change", function() {
    // Getting the selected option text
    const selectedText = dropdown.options[dropdown.selectedIndex].text;

    // Update the paragraph with the selected option
    selectedOption.textContent = "Selected: " + selectedText;
});

const startGameBtn = document.getElementById("startGameBtn");

// Function to initialize the game
function startGame() {
    showCard();
}

startGameBtn.addEventListener("click", startGame);



function showCard() {

    const gameElement = document.getElementById("game");

    if (topicData.length > 0) {
        // Access the first topic data object
        const { topic, question, answer } = topicData[0];
        
        // Create a container div
        const flashCard = document.createElement('div');
        
        // Create and append elements for topic, question, and answer
        const topicElement = document.createElement('h3');
        topicElement.textContent = `Topic: ${topic}`;
        
        const questionElement = document.createElement('h3');
        questionElement.textContent = `Question: ${question}`;
        
        const answerElement = document.createElement('h3');
        answerElement.textContent = `Answer: ${answer}`;
        
        flashCard.append(topicElement, questionElement, answerElement);
        
        // Append the flash card to the game element
        gameElement.append(flashCard);
    } else {
        console.error('No topic data available');
    }
}
