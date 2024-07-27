

//skicka requests till webbservern

const express = require('express');
const { readFile } = require('fs').promises;
const app = express()
const path = require('path');


//annars funkar inte css eller bild
app.use(express.static(path.join(__dirname, 'view')));


app.get('/', async (req, response) => {
    response.send( await readFile('view/index.html', 'utf8'));
});


//listen to incomming requests

app.listen(process.env.PORT || 3000, () => console.log('App is running on port http://localhost:3000'));