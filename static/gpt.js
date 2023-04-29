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

    const input = document.getElementById('question');
    const sendButton = document.getElementById("chatbot-body-input-button");
    const historyDisplay = document.querySelector("#history-list");

    input.addEventListener('keydown', async function(event) {
        if (event.key === 'Enter') {
            showTypingIndicator();
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");

            newUserLabel.innerText = "You";
            newUserLabel.style.color = "black";
            newUserLabel.style.fontWeight = "bold";
            newUserLabel.classList.add("question");
            newUserText.classList.add("question");
            newUserText.innerText = input.value;

            const newLis = [newUserLabel, newUserText];
            for(let li of newLis) {
                historyDisplay.appendChild(li);
            }

            get_response(input.value);
            input.value = "";
        }

        sendButton.addEventListener("click", function() {
            showTypingIndicator();
            const newUserLabel = document.createElement("p");
            const newUserText = document.createElement("div");

            newUserLabel.innerText = "You";
            newUserLabel.style.color = "black";
            newUserLabel.style.fontWeight = "bold";
            newUserLabel.classList.add("question");
            newUserText.classList.add("question");
            newUserText.innerText = input.value;

            const newLis = [newUserLabel, newUserText];
            for(let li of newLis) {
                historyDisplay.appendChild(li);
            }

            get_response(input.value);
            input.value = "";
        });
    });

    function get_response(question) {

        const model = 'text-davinci-003';

        let chatContext = [];
        for (let i = 0; i < history.length-1; i++) {
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
                prompt: `This is our chat history, for context:"\n\n${chatContext}\n\n ${question}?"`,
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
                }
                else {
                    newResponseText.innerText = "Please try asking that again, or try a different question."
                }

                const newLis = [newResponseLabel, newResponseText];
                for(let li of newLis) {
                    historyDisplay.appendChild(li);
                }
                hideTypingIndicator();
                history.push({question: question, response: data.choices[0].text.trim()});
            })
            .catch(error => console.error(error));
    }

});

function clear_history() {
    history = [];
    document.getElementById("history-list").innerHTML = "";
}
