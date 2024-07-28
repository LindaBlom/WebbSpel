import {addMessagesSequentially, addAnswers } from './modules.js';
import { firstMessages, firstAnswers } from '../controller/messageController.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('script is running');


    const chatContainer = document.querySelector('.chat-container');
    addMessagesSequentially(firstMessages, chatContainer, 2000);

    const buttonContainer = document.querySelector('.button-container');
    addAnswers(firstAnswers, buttonContainer);


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
