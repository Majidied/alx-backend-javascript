// 7-http_express.js
const express = require('express');

const app = express();
const fs = require('fs');

async function countStudents(path) {
  try {
    const csv = await fs.promises.readFile(path, { encoding: 'utf8' });
    const fields = {};
    const data = csv.trim().split('\n').slice(1);
    data.forEach((line) => {
      const student = line.split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    });
    const total = `Number of students: ${data.length}`;
    let response = `${total}`;
    for (const field in fields) {
      if (field) {
        const list = `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        response += `\n${list}`;
      }
    }
    return response;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((result) => {
      res.write(result);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
});

app.listen(1245);

module.exports = app;
