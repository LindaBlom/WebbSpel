import { addChatMessage,addMessagesSequentially } from './modules.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('script is running');


    const chatContainer = document.querySelector('.chat-container');

    addMessagesSequentially(['Heej! är du upptagen? :D', 'Hallå svara!!!', 'Svara dååå!'], chatContainer, 2000);



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
        console.error('Buttons not found');
    }}














);
