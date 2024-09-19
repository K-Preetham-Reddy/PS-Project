// script.js
let selectedButton = null;

// Function to handle option selection
function selectOption(button, isCorrect) {
    // Remove the selected class from previously selected button
    if (selectedButton) {
        selectedButton.style.backgroundColor = "#f9f9f9"; // Reset background color
    }
    
    // Set the new selected button
    selectedButton = button;

    // Store whether the selected answer is correct or wrong
    selectedButton.correct = isCorrect;
    
    // Optional: Highlight the selected button
    selectedButton.style.backgroundColor = "#d3d3d3"; // Light gray to indicate selection
}

// Function to handle submission
function submitAnswer() {
    if (selectedButton) {
        if (selectedButton.correct) {
            selectedButton.style.backgroundColor = "#7ED957"; // Change background color to green for correct
            // document.getElementById('Heading').innerText = "Correct!";
        } else {
            selectedButton.style.backgroundColor = "#E60101"; // Change background color to red for wrong
        }

        // Disable all buttons after submission
        let buttons = document.querySelectorAll('.option');
        buttons.forEach(button => {
            button.disabled = true;
        });

        // // Disable the submit button to prevent further submission
        // document.getElementById('submitButton').disabled = true;
        //Change the submit button to the "Next Question" button
        const submitButton = document.getElementById('submitButton');
        submitButton.innerText = "Next ";
        submitButton.onclick = goToNextPage; // Change the function to navigate to the next page
    } else {
        alert("Please select an option before submitting.");
    }
}   
// Function to navigate to the next page
function goToNextPage() {
    window.location.href = "./Q4.html"; // Replace with your actual next page file name
}