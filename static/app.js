// App will only function once document object content is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Store profile picture path
    const pfpPath = '../'+ sessionStorage.getItem('profile_pic_path');

    // Get AI chat typing indicator
    const typingIndicator = document.querySelector(".typing-indicator");

    // Declare async functions for showing and displaying typing indicator
    async function showTypingIndicator() {
        typingIndicator.style.display = 'block';
    }
    async function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    // This is bad practice for scaled production, would ideally use a secrets manager
    // This key will be deprecated after group demo
    const apiKey = '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';

    // Initialise chat history array
    let history = [];

    // Store element references
    const questionInput = document.getElementById('question-input');
    const sendButton = document.getElementById("chatbot-body-input-button");
    const historyButton = document.getElementById("chatbot-history-button");
    const historyDisplay = document.querySelector("#history-list");

    // Implement message sending mechanisms; click or 'enter' (key pressed is checked internally)
    questionInput.addEventListener('keydown', sendMessage);
    sendButton.addEventListener('click', sendMessage);

    // Implement history clearance button
    historyButton.addEventListener("click", () => {
        history = [];
        historyDisplay.innerHTML = "";
    })

    async function sendMessage(event) {
        if (event.key === 'Enter' || event.type === "click") {
            // Show typing indicator as soon as message is sent
            showTypingIndicator();

            // Create new elements for new sent message
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");
            const newUserImg = document.createElement("img");

            // Add both text and class for styling to user message label
            newUserLabel.innerText = "You";
            newUserLabel.classList.add("question-label");

            // Add both text and class for styling to user message content itself
            newUserText.innerText = questionInput.value;
            newUserText.classList.add("question");

            // Add user profile picture for display
            newUserImg.src = pfpPath;
            newUserImg.classList.add("profile-picture");
            newUserImg.style.width = "50px";
            newUserImg.style.height = "50px";

            // Create container for user's message
            const newUserContainer = document.createElement("div");
            newUserContainer.classList.add("user-chat-container");
            newUserContainer.appendChild(newUserImg);  // add the profile picture
            newUserContainer.appendChild(newUserLabel);  // add the chat label
            newUserContainer.appendChild(newUserText);  // add the chat text

            // Visual output of chat history, including newly sent or received messages
            const newChatText = [newUserContainer];
            for (let text of newChatText) {
                historyDisplay.appendChild(text);
            }

            // Call API for AI response
            get_response(questionInput.value);

            // Clear the question input space
            questionInput.value = "";
        }
    }
    // Prompt engineering function, this feeds in the previous chat history in order to give
    // the model context. This is required for high quality responses.
    function get_response(question) {

        // Define selected Open-AI model
        const model = 'text-davinci-003';

        // Store chat context for use in prompting
        let chatContext = [];
        for (let i = 0; i < history.length; i++) {
            chatContext.push("I asked: " + history[i].question);
            chatContext.push("You replied: " + history[i].response);
        }

        // Open AI API call
        fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: model,
                prompt: `This is our chat history, for context:"\n\n${chatContext}\n\n
                Now, ${question}?"`,
                temperature: 0.1,
                max_tokens: 250,
            }),
        })
            .then(response => response.json())
            .then(data => {

                // On promise resolution, visually display AI response

                // Create elements that constitute AI response
                const newResponseLabel = document.createElement("p");
                const newResponseText = document.createElement("div");
                const AIPfp = document.createElement("img");

                // Set AI profile picture
                AIPfp.src= "../static/graphics/Jeffrey_yellow.png"
                AIPfp.classList.add("profile-picture");
                AIPfp.style.alignSelf = "flex-start";
                AIPfp.style.width = "65px"

                // Add classes for styling and static label text
                newResponseLabel.innerText = "AI Assistant";
                newResponseLabel.classList.add("response-label");
                newResponseText.classList.add("response");

                // Reformat API response
                let aiResponse = data.choices[0].text.trim();

                // Remove random comma that is sometimes returned at start of response
                if (aiResponse.charAt(0) === ",") {
                    aiResponse = aiResponse.slice(1);
                }

                // Show the response if one was received
                if (aiResponse !== "") {
                    newResponseText.innerText = aiResponse;
                } else {
                    // Otherwise show an error message to the user
                    newResponseText.innerText = "Please try asking that again, or try a different question."
                }

                // Display response elements
                const newChatText = [AIPfp, newResponseLabel, newResponseText];
                for (let newElement of newChatText) {
                    historyDisplay.appendChild(newElement);
                }

                // Hide the typing indicator (promise resolution means response has been obtained)
                hideTypingIndicator();

                // Update history list for use in chat context and reprinting
                history.push({"question": question, "response": data.choices[0].text.trim()});
            })
            .catch(error => console.error(error));
    }

    // Get dark mode toggle elements and store in an array
    const toggleSwitch = document.querySelector('.toggle-switch');
    const toggleSwitchHandle = document.querySelector('.toggle-switch-handle');
    const body = document.querySelector("body");
    const questionField = document.querySelector("#question-input");
    const chatBot = document.querySelector("#chatbot");
    const filterButton = document.querySelector("#filter-button");
    const darkmodeEnabledElements = [body, questionField, chatBot, sendButton, historyButton, filterButton]


    // Logic for dark mode implementation in ai-chat page
    toggleSwitch.addEventListener('click', () => {
        toggleSwitch.classList.toggle('on');
        darkmodeEnabledElements.forEach(element => element.classList.toggle("dark-mode"));

        const userLabels = document.querySelectorAll("p.question-label")
        const AILabels = document.querySelectorAll("p.response-label")

        for (let element of userLabels) {
            element.classList.toggle("dark-mode");
        }
        for (let element of AILabels) {
            element.classList.toggle("dark-mode");
        }

        toggleSwitch.classList.toggle('off');
    });

    // Filter chat history
    document.getElementById('filter-button').addEventListener('click', filterChatHistory);
    document.getElementById('filter-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterChatHistory();
        }
    });

    function filterChatHistory() {
        // Get relevant document objects
        const filterValue = document.getElementById("filter-input").value.toLowerCase();
        const historyList = document.getElementById('history-list');
        const responses = historyList.getElementsByClassName('response');
        const questions = historyList.getElementsByClassName('question');

        // FILTERING AI CHAT RESPONSES
        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            const responseText = response.textContent.toLowerCase();
            const responseLabel = response.previousElementSibling;
            const responsePFP = responseLabel.previousElementSibling;

            if (responseText.includes(filterValue)) {
                response.style.display = 'block';
                if (responseLabel) {
                    responseLabel.style.display = 'block';
                }
                if (responsePFP) {
                    responsePFP.style.display = 'block';
                }
            }
            else {
                response.style.display = 'none';
                if (responseLabel) {
                    responseLabel.style.display = 'none';
                }
                if (responsePFP) {
                    responsePFP.style.display = 'none';
                }
            }
        }

        // FILTERING QUESTIONS
        for (let j = 0; j < questions.length; j++) {
            const question = questions[j];
            const questionText = question.textContent.toLowerCase();
            const questionLabel = question.previousElementSibling;
            const questionPFP = questionLabel.previousElementSibling;

            if (questionText.includes(filterValue)) {
                question.style.display = 'block';
                if (questionLabel) {
                    questionLabel.style.display = 'block';
                }
                if (questionPFP) {
                    questionPFP.style.display = 'block';
                }
            } else {
                question.style.display = 'none';
                if (questionLabel) {
                    questionLabel.style.display = 'none';
                }
                if (questionPFP) {
                    questionPFP.style.display = 'none';
                }
            }
        }
    }
});

