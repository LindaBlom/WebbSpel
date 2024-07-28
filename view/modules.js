



export function addChatMessage(message,chatContainer) {
    const newBubble = document.createElement('div');
    newBubble.className = 'chat-bubble';
    newBubble.textContent = message;
    chatContainer.appendChild(newBubble);
    // Scroll the new message into view
    newBubble.scrollIntoView({ behavior: 'smooth' });
}

export function addAnswer(answer, buttonContainer, index){
    const newButton = document.createElement('button');
    newButton.textContent = answer;
    newButton.id = 'button ' + index;
    buttonContainer.appendChild(newButton);
}

export function addAnswers(answers, buttonContainer){
   answers.forEach((answer, index) => {addAnswer(answer, buttonContainer, index)});
   }
    
export function clearChat(chatContainer){ 
    chatContainer.innerHTML = ''
};

export function addMessagesSequentially(messages, chatContainer, delay) {
    messages.forEach((message, index) => {
        setTimeout(() => {addChatMessage(message, chatContainer)}, index *delay)
    })  
};
