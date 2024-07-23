// 7-http_express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    // Handle the /students route
});

app.listen(1245);

module.exports = app;
