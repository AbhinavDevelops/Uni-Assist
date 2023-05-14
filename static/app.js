// App will only function once document object model is loaded
document.addEventListener('DOMContentLoaded', function() {

    const pfpPath = '../'+ sessionStorage.getItem('profile_pic_path');
    console.log(pfpPath)

    const typingIndicator = document.querySelector(".typing-indicator");

    async function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        console.log("Show");
    }

    async function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
        console.log("Hide");
    }

    // This is bad practice for production, would ideally use a secrets manager
    // This key will be deprecated after group demo
    const apiKey = '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';
    let history = [];

    const input = document.getElementById('question-input');
    const sendButton = document.getElementById("chatbot-body-input-button");
    const historyButton = document.getElementById("chatbot-history-button");
    const historyDisplay = document.querySelector("#history-list");
    input.addEventListener('keydown', sendMessage);
    sendButton.addEventListener('click', sendMessage);

    historyButton.addEventListener("click", () => {
        history = [];
        historyDisplay.innerHTML = "";
    })

    async function sendMessage(event) {
        if (event.key === 'Enter' || event.type === "click") {
            showTypingIndicator();
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");
            const newUserImg = document.createElement("img");

            newUserLabel.innerText = "You";
            newUserLabel.style.color = "black";
            newUserLabel.style.fontWeight = "bold";
            newUserLabel.classList.add("question");
            newUserText.classList.add("question");
            newUserText.innerText = input.value;
            newUserImg.src = pfpPath;
            newUserImg.classList.add("profile-picture");

            // For the visual output of chat history
            const newUserContainer = document.createElement("div");
            newUserContainer.classList.add("user-chat-container");
            newUserContainer.appendChild(newUserImg);  // add the profile picture
            newUserContainer.appendChild(newUserLabel);  // add the chat label
            newUserContainer.appendChild(newUserText);  // add the chat text


            const newChatText = [newUserContainer];  // add the container to the array
    for (let text of newChatText) {
        historyDisplay.appendChild(text);
    }

            

            get_response(input.value);
            input.value = "";
        }
    }
        // Prompt engineering function, this feeds in the previous chat history in order to give
        // the model context. This is required for high quality responses.
        function get_response(question) {

            const model = 'text-davinci-003';

            let chatContext = [];
            for (let i = 0; i < history.length - 1; i++) {
                chatContext.push(history[i].response);
            }

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
                    temperature: 0.4,
                    max_tokens: 250,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    const newResponseLabel = document.createElement("p");
                    const newResponseText = document.createElement("div");

                    newResponseLabel.innerText = "AI Assistant";
                    newResponseLabel.style.color = "black";
                    newResponseLabel.style.fontWeight = "bold";
                    newResponseLabel.classList.add("response");
                    newResponseText.classList.add("response");

                    let aiResponse = data.choices[0].text.trim();
                    if (aiResponse.charAt(0) === ",") {
                        aiResponse = aiResponse.slice(1);
                    }
                    if (aiResponse !== "") {
                        newResponseText.innerText = aiResponse;
                    } else {
                        newResponseText.innerText = "Please try asking that again, or try a different question."
                    }

                    const newChatText = [newResponseLabel, newResponseText];
                    for (let text of newChatText) {
                        historyDisplay.appendChild(text);
                    }
                    hideTypingIndicator();
                    history.push({question: question, response: data.choices[0].text.trim()});
                })
                .catch(error => console.error(error));
        }

        const toggleSwitch = document.querySelector('.toggle-switch');
        const toggleSwitchHandle = document.querySelector('.toggle-switch-handle');
        const body = document.querySelector("body");
        const questionField = document.querySelector("#question-input");
        const chatBot = document.querySelector("#chatbot");

        // Logic for dark mode implementation in ai-chat page
        toggleSwitch.addEventListener('click', () => {

            toggleSwitch.classList.toggle('on');
            body.classList.toggle("dark-mode");
            questionField.classList.toggle("dark-mode");
            chatBot.classList.toggle("dark-mode");
            sendButton.classList.toggle("dark-mode");
            historyButton.classList.toggle("dark-mode");
            toggleSwitch.classList.toggle('off');
        });
});

