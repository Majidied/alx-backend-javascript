// 7-http_express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync(process.argv[2], 'utf8').split('\n').slice(1);
  const csStudents = data
    .filter((line) => line.split(',')[3] === 'CS')
    .map((line) => line.split(',')[0]);
  const sweStudents = data
    .filter((line) => line.split(',')[3] === 'SWE')
    .map((line) => line.split(',')[0]);
  res.send(
    `This is the list of our students\nNumber of students in CS: ${
      csStudents.length
    }. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${
      sweStudents.length
    }. List: ${sweStudents.join(', ')}`
  );
});

app.listen(1245);

module.exports = app;
