

// Store the user-id in localStorage
localStorage.setItem('user-id', userId);
console.log(localStorage.getItem('user-id'));

document.addEventListener('DOMContentLoaded', function() {

  // This line declares a constant variable named "apiKey" and assigns it a string value
const apiKey = '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';

// This array will store the history of questions and responses
let history = [];

  // Get the input element
  const input = document.getElementById('question');

  // Listen for the 'keydown' event on the input element
  input.addEventListener('keydown', function(event) {
    // Check if the 'enter' key was pressed
    if (event.key === 'Enter') {
      // Do something, like submit a form or call a function
      get_response();
    }
  });

// This function sends a request to the OpenAI API to generate a response based on the user's input
function get_response() {
    // This line gets the value of the input field with the ID "question"
    var question = document.getElementById("question").value;

    // This constant variable specifies which OpenAI model to use for generating the response
    const model = 'text-davinci-002';

    // This function sends a POST request to the OpenAI API with the specified parameters
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // This line sets the API key for authentication
      },
      body: JSON.stringify({
        model: model,
        prompt: question,
        temperature: 0.5,
        max_tokens: 100,
      }),
    })
    // This line parses the response from the API and extracts the generated text
    .then(response => response.json())
    .then(data => {
        // This line stores the question and response in the history array
        history.push({question: question, response: data.choices[0].text});
        // This line updates the HTML to display the current response and the history of questions and responses
        document.getElementById("response").innerHTML = data.choices[0].text;
        document.getElementById("history-list").innerHTML = "";
        for (let i = 0; i < history.length; i++) {
            // Select history display
            const historyDisplay = document.querySelector("#history-list");

            // Create new list item each for "User" (you), [your question], "AI Assistant", [its response]
            const newLiUserLabel = document.createElement("li");
            const newLiUserText = document.createElement("li");
            const newLiResponseLabel = document.createElement("li");
            const newLiResponseText = document.createElement("li");

            // Format the static labels
            newLiUserLabel.innerText = "You";
            newLiUserLabel.style.color = "black";
            newLiUserLabel.style.fontWeight = "bold";
            newLiResponseLabel.innerText = "AI Assistant";
            newLiResponseLabel.style.color = "black";
            newLiResponseLabel.style.fontWeight = "bold";

            // Get the question and response data from history
            newLiUserText.innerText = history[i].question
            newLiResponseText.innerText = history[i].response

            // Display the new list items
            const newLis = [newLiUserLabel, newLiUserText, newLiResponseLabel, newLiResponseText];
            for(let li of newLis) {
                historyDisplay.appendChild(li);
            }
        }
    })
    .catch(error => console.error(error)); // This line logs any errors that occur during the request

} 



});

function clear_history() {
  history = [];
  document.getElementById("history-list").innerHTML = "";
}


