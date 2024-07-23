// 3-read_file_async.js
const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                console.log(data);
                resolve();
            }
        });
    });
}

module.exports = countStudents;
