// DOM ELEMENTS

const dropdown = document.getElementById("dropdown");
const selectedOption = document.getElementById("selectedOption");

// Add an event listener to detect changes in the dropdown selection
dropdown.addEventListener("change", function(){

    // Getting the selected option text
    const selectedText = dropdown.options[dropdown.selectedIndex].text;

    // Update the paragraph with the selected option
    selectedOption.textContent = "Selected" + selectedText;
});