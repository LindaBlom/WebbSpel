import 

function saveInput(){
    const inputBox = document.getElementById('inputBox');
    const inputValue = inputBox.value
    console.log(inputValue);
}

function hoverButton(button) {
    button.style.position = "absolute";
    button.style.left = Math.random() * 500 + "px";
    const messages = [
        "Hello, welcome to the chat!",
        "How can I assist you today?",
        "We have various options available for you.",
        "Feel free to ask any questions."
    ];
    //hanterar requests från apin och gör om till meddelanden som kan läsaas av i actionHandler.js
    
    
    
    button.style.top = Math.random() * 500 + "px";   
}

function addMessage(content) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message`;
    messageContainer.textContent = content;
    document.querySelector('.chat-container').appendChild(messageContainer);
}

// Example of adding messages dynamically