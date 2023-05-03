document.addEventListener('DOMContentLoaded', function() {

    const typingIndicator = document.querySelector(".typing-indicator");

    async function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        console.log("Show");
    }

    async function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
        console.log("Hide");
    }

    const apiKey = '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';
    let history = [];

    const input = document.getElementById('question-input');
    const sendButton = document.getElementById("chatbot-body-input-button");
    const historyButton = document.getElementById("chatbot-history-button");
    const historyDisplay = document.querySelector("#history-list");
    input.addEventListener('keydown', sendMessage);
    sendButton.addEventListener('click', sendMessage);

    async function sendMessage(event) {
        if (event.key === 'Enter' || event.type === "click") {
            showTypingIndicator();
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");

            newUserLabel.innerText = "You";
            newUserLabel.style.color = "black";
            newUserLabel.style.fontWeight = "bold";
            newUserLabel.classList.add("question");
            newUserText.classList.add("question");
            newUserText.innerText = input.value;

            const newChatText = [newUserLabel, newUserText];
            for (let text of newChatText) {
                historyDisplay.appendChild(text);
            }

            get_response(input.value);
            input.value = "";
        }
    }

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
                    temperature: 0.6,
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

function clear_history() {
    history = [];
    document.getElementById("history-list").innerHTML = "";
}
