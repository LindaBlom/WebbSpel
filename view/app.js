document.addEventListener('DOMContentLoaded', () => {
    console.log('script is running');


    const chatContainer = document.querySelector('.chat-container');
    
    function addChatMessage(message,chatContainer) {
        const newBubble = document.createElement('div');
        newBubble.className = 'chat-bubble';
        newBubble.textContent = message;
        chatContainer.appendChild(newBubble);
        // Scroll the new message into view
        newBubble.scrollIntoView({ behavior: 'smooth' });
    }

    addChatMessage('Hello World!', chatContainer);
    addChatMessage('Testar bara lite grejjor hihi', chatContainer);







    // EventListner för knappar
    const buttons = document.querySelectorAll('button');
    if (buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`${button.id} selected`);
            });
        });
    }

     else {
        console.error('Button not found');
    }}














);
