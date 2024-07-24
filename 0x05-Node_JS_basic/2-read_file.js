// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    console.log(`Number of students: ${data.split('\n').length - 1}`);
    console.log(`Number of students in CS: ${data.split('\n').filter((line) => line.split(',')[3] === 'CS').length - 1}. List: ${data.split('\n').filter((line) => line.split(',')[3] === 'CS').map((line) => line.split(',')[0]).slice(1).join(', ')}`);
    console.log(`Number of students in SWE: ${data.split('\n').filter((line) => line.split(',')[3] === 'SWE').length - 1}. List: ${data.split('\n').filter((line) => line.split(',')[3] === 'SWE').map((line) => line.split(',')[0]).slice(1).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
