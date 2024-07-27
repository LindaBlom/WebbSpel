const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Server is listening on http://localhost:${PORT}`)
)


//adding endpoint to API
app.get('/user', (req, res) => {
    res.status(200).send({ message: 'List of users' });
})

app.all('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
})

