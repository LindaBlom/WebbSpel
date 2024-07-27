import * as functions from './actionHandler.js';


document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission behavior
        functions.saveInput();
    }
});

//Lyssna på knapptryck

//lyssna på enter

//lyssna på hover







