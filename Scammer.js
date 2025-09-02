 

async function getAnswer() {
	let inputText = document.getElementById('question').value;
    let prompt = "Answer this question as if you are an Indian Scammer who says he is from microsoft support:"
	
	let question = prompt + inputText;
	console.log(question);

	try {
		const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer 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"
			},
			body: JSON.stringify({
				"model": "openai/gpt-oss-20b",
				"messages": [{ "role": "user", "content": question }],
				"temperature": 1,
				"max_tokens": 1024
			})
		});
		
		if (!response.ok) {
			console.log(response)
			throw new Error("Failed to fetch verse");
		}
		const data = await response.json();
		console.log(data.choices[0].message.content);
		
		document.getElementById("answer").innerHTML = data.choices[0].message.content;
		
	} catch (error) {
		console.error("Error:", error);
	}
}

function goHome() {
    window.location.href = "ulhome.html";
  }  

document.getElementById('test') = localStorage.getItem("test");


