// 5-http.js
const http = require('http');
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
        const list = `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        response += `${list}`;
      }
    }
    return response;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const result = await countStudents(process.argv[2]);
      res.write(result);
    } catch (error) {
      res.write(error.message);
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;
