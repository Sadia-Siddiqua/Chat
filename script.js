const chatBox = document.getElementById("chat-box");

// Love Poetry Exchange Between Shahadat & Tisa
const conversation = [
    { sender: "shahadat", text: "You are the moon that lights up my night. 🌙💖" },
    { sender: "tisa", text: "And you are the sun that brightens my day. ☀️😍" },

    { sender: "shahadat", text: "My love for you is like the ocean, endless and deep. 🌊💙" },
    { sender: "tisa", text: "Your love is the rhythm of my heart. 🎶❤️" },

    { sender: "shahadat", text: "In your eyes, I find my forever home. 👀💞" },
    { sender: "tisa", text: "In your arms, I find my safest place. 🤗💖" },

    { sender: "shahadat", text: "Every heartbeat whispers your name. ❤️✨" },
    { sender: "tisa", text: "Every second with you is a beautiful memory. ⏳💕" }
];

let messageIndex = 0;

// Function to create and display the typing indicator
function showTypingIndicator(sender) {
    let typingDiv = document.createElement("div");
    typingDiv.classList.add("typing", sender);
    typingDiv.innerHTML = "<span></span><span></span><span></span>";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    return typingDiv;
}

// Function to add messages to the chat
function addMessage(text, sender) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Function to show typing effect before messages
function showNextMessage() {
    if (messageIndex < conversation.length) {
        let message = conversation[messageIndex];
        let typingIndicator = showTypingIndicator(message.sender); // Show typing effect at correct position

        setTimeout(() => {
            typingIndicator.remove(); // Remove typing effect before showing message
            addMessage(message.text, message.sender);
            messageIndex++;

            setTimeout(() => {
                showNextMessage(); // Continue the chat after a delay
            }, 1500);
        }, 2000); // Delay before message appears
    }
}

// Start the conversation automatically
showNextMessage();