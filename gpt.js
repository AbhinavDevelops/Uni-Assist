const apiKey = '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'

function get_response() {
    var question = document.getElementById("question").value;
    const model = 'text-davinci-002';


    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        prompt: question,
        temperature: 0.5,
        max_tokens: 50,
      }),
    })
    .then(response => response.json())
    .then(data => document.getElementById("response").innerHTML = data.choices[0].text)
    .catch(error => console.error(error));

    }
