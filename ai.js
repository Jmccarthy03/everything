 // 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

let prompt = "";

function clearPrompt(){
	prompt = "";
	getAnswer();
}

function tgpt(){
	 prompt = "answer this question as if you are Donald Trump";
	getAnswer();
}

function ab(){
	 prompt = "answer this question as if you are Joe Biden";
	getAnswer();
}


async function getAnswer() {
	let inputText = document.getElementById('question').value;
    //let prompt = "my last question was:" 
	
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
				"model": "llama-4-scout-17b-16e-instruct",
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
		//let lastAnswer = data.choices[0].message.content;
	} catch (error) {
		console.error("Error:", error);
	}
	//let lastQuestion = inputText + "your last answer was:" + lastAnswer;
	//document.getElementById("test").innerHTML = lastQuestion;
}



