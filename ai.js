// 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

// Stores the conversation history
let conversationHistory = [];

async function getAnswer() {
    let inputText = document.getElementById('question').value;

    // Add user question to the conversation history
    conversationHistory.push({ role: "user", content: inputText });

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                "model": "llama-3.3-70b-versatile",
                "messages": conversationHistory,  // Send entire history
                "temperature": 1,
                "max_tokens": 1024
            })
        });

        if (!response.ok) {
            console.log(response);
            throw new Error("Failed to fetch response");
        }

        const data = await response.json();
        let aiResponse = data.choices[0].message.content;

        // Add AI response to the conversation history
        conversationHistory.push({ role: "assistant", content: "hello" aiResponse });

        // Display response on the page
        document.getElementById("answer").innerHTML = aiResponse;

    } catch (error) {
        console.error("Error:", error);
    }
}