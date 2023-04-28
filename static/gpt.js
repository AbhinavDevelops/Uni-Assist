


document.addEventListener('DOMContentLoaded', function() {

  // This line declares a constant variable named "apiKey" and assigns it a string value
const apiKey = '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';

// This array will store the history of questions and responses
let history = [];

  // Get the input and send button elements
  const input = document.getElementById('question');
  const sendButton = document.getElementById("#chatbot-body-input-button");

  // Listen for the 'keydown' event on the input element
  input.addEventListener('keydown', function(event) {
    // Check if the 'enter' key was pressed
    if (event.key === 'Enter') {
      // Do something, like submit a form or call a function
      get_response();
      input.value = "";
    }

    sendButton.addEventListener("click", get_response)

  });

// This function sends a request to the OpenAI API to generate a response based on the user's input
function get_response() {
    // This line gets the value of the input field with the ID "question"
    var question = document.getElementById("question").value;

    // This constant variable specifies which OpenAI model to use for generating the response
    const model = 'text-davinci-002';

    const chatContext = [];
    for (let i = 0; i < history.length; i++) {
        chatContext.push("what I asked:");
        chatContext.push(history[i].question);
        chatContext.push("what you responded");
        chatContext.push(history[i].response);
    }

    // This function sends a POST request to the OpenAI API with the specified parameters
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // This line sets the API key for authentication
      },
      body: JSON.stringify({
        model: model,
        prompt: `using the previous context of our conversation: ${chatContext}, ${question}?`,
        temperature: 0.5,
        max_tokens: 100,
      }),
    })
    // This line parses the response from the API and extracts the generated text
    .then(response => response.json())
    .then(data => {
        // This line stores the question and response in the history array
        history.push({question: question, response: data.choices[0].text.trim()});
        // This line updates the HTML to display the current response and the history of questions and responses
        document.getElementById("response").innerHTML = data.choices[0].text;
        document.getElementById("history-list").innerHTML = "";
        for (let i = 0; i < history.length; i++) {
            // Select history display
            const historyDisplay = document.querySelector("#history-list");

            // Create new list item each for "User" (you), [your question], "AI Assistant", [its response]
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");
            const newResponseLabel = document.createElement("p");
            const newResponseText = document.createElement("div");


            // Format the static labels
            newUserLabel.innerText = "You";
            newUserLabel.style.color = "black";
            newUserLabel.style.fontWeight = "bold";
            newUserLabel.classList.add("question");
            newResponseLabel.innerText = "AI Assistant";
            newResponseLabel.style.color = "black";
            newResponseLabel.style.fontWeight = "bold";
            newResponseLabel.classList.add("response");

            // Get the question and response data from history
            newUserText.classList.add("question");
            newUserText.innerText = history[i].question;
            newResponseText.classList.add("response");
            if (history[i].response != "") {
                newResponseText.innerText = history[i].response;
            }
            else {
                newResponseText.innerText = "Please try asking that again, or try a different question."
            }

            // Display the new list items
            const newLis = [newUserLabel, newUserText, newResponseLabel, newResponseText];
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


