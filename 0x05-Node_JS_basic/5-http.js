// 5-http.js
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        const data = fs.readFileSync(process.argv[2], 'utf8').split('\n').slice(1);
        res.write('This is the list of our students\n');
        res.write(`Number of students in CS: ${data.filter((line) => line.split(',')[3] === 'CS').length}. List: ${data.filter((line) => line.split(',')[3] === 'CS').map((line) => line.split(',')[0]).join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.filter((line) => line.split(',')[3] === 'SWE').length}. List: ${data.filter((line) => line.split(',')[3] === 'SWE').map((line) => line.split(',')[0]).join(', ')}\n`);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
