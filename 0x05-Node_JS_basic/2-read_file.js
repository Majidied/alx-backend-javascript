const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');
    if (lines.length <= 1) {
      console.log('No students found');
      return;
    }

    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstName, lastName, age, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', '
        )}`
      );
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
