

//skicka requests till webbservern
//hanterar kommunikation mellan server och klient

const express = require('express');
const { readFile } = require('fs').promises;
const app = express()
const path = require('path');


//annars funkar inte css eller bild
app.use(express.static(path.join(__dirname, 'view')));


// express läser in html filen till websidan
app.get('/', async (request, response) => {
    response.send( await readFile('view/index.html', 'utf8'));
});


//listen to incomming requests

app.listen(process.env.PORT || 3000, () => console.log('App is running on port http://localhost:3000'));