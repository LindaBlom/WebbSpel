



export function addChatMessage(message,chatContainer) {
    const newBubble = document.createElement('div');
    newBubble.className = 'chat-bubble';
    newBubble.textContent = message;
    chatContainer.appendChild(newBubble);
    // Scroll the new message into view
    newBubble.scrollIntoView({ behavior: 'smooth' });
}


export function addMessagesSequentially(messages, chatContainer, delay) {
    messages.forEach((message, index) => {
        setTimeout(() => {addChatMessage(message, chatContainer)}, index *delay)
    })  
};
