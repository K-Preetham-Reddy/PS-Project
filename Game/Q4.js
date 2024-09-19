// script.js
let selectedButton = null;

// Function to handle option selection
function selectOption(button, isCorrect) {
    // Remove the selected class from previously selected button
    if (selectedButton) {
        selectedButton.style.backgroundColor = "#D5BDA9"; // Reset background color
        selectedButton.style.border = "3px solid black"; //Reset border
        selectedButton.style.transform = "scale(1)"; //Reset expantion of the selected option
    }
    
    // Set the new selected button
    selectedButton = button;

    // Store whether the selected answer is correct or wrong
    selectedButton.correct = isCorrect;
    
    // Optional: Highlight the selected button
    selectedButton.style.transform = "scale(1.10)"; // Expand the option to indicate selection
}

// Function to handle submission
function submitAnswer() {
    if (selectedButton) {
        if (selectedButton.correct) {
            selectedButton.style.backgroundColor = "#7ED957"; // Change background color to green for correct
            selectedButton.style.border= "5px solid green" ;    //Change border color to green for correct
        } else {
            selectedButton.style.backgroundColor = "#da1e37"; // Change background color to red for wrong
            selectedButton.style.border= "5px solid #c71f37" ;  //Change border color to dark red for wrong
        }

        // // Disable all buttons after submission
        // let buttons = document.querySelectorAll('.option');
        //Change the submit button to the "Next Question" button
        const submitButton = document.getElementById('submitButton');
        submitButton.innerText = "Next ";
        submitButton.onclick = goToNextPage; // Change the function to navigate to the next page
        buttons.forEach(button => {
            button.disabled = true;
        });

        // Disable the submit button to prevent further submission
        document.getElementById('submitButton').disabled = true;
    } else {
        alert("Please select an option before submitting.");
    }
}
function goToNextPage() {
    window.location.href = "./Q5.html"; // Replace with your actual next page file name
}