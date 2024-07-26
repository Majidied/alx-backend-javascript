const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.trim().split('\n');
    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return { firstname, lastname, age, field };
    });

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${
          firstnames.length
        }. List: ${firstnames.join(', ')}`
      );
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
