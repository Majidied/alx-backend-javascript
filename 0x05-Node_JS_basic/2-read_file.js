// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    console.log(data);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
